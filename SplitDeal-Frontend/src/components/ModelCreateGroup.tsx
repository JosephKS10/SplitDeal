import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiUrls from "../Api/ApiUrls";
import ModelGroupMemberAdmin from "./ModelGroupMemberAdmin";

interface Deal {
    _id: string;
    storeLogo: string;
    dealName: string;
    dealDesc: string;
    storeName: string;
    storeLocation: string;
    totalValue: number;
    discount: number;
    expiryDate: string;
    membersRequired?: number;
}

interface ModelCreateGroupProps {
    selectedDeal: Deal | null;
    closeModal: () => void;
}

const ModelCreateGroup: React.FC<ModelCreateGroupProps> = ({ selectedDeal, closeModal }) => {
    const [membersRequired, setMembersRequired] = useState<string>("");
    const [groupMemberData, SetGroupMemberData] = useState<string>("");
    const [showNextStep, setShowNextStep] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);
    
    const yourToken = localStorage.getItem('userToken');
    const tokenWithoutQuotes = yourToken?.replace(/^"|"$/g, "");

    useEffect(() => {
        if (selectedDeal) {
            setMembersRequired(selectedDeal.membersRequired ? selectedDeal.membersRequired.toString() : "");
            setShowNextStep(false); // Reset next step state when a new deal is selected
            setStatusMessage(null); // Reset status message
            setIsError(false); // Reset error state
        }
    }, [selectedDeal]);

    if (!selectedDeal) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMembersRequired(e.target.value);
    };
    const handleCreateGroupClick = async () => {
        if (!membersRequired.trim()) {
            alert("Please enter the number of members required.");
            return;
        }

        const requestData = {
            dealId: selectedDeal._id,
            dealLogo: selectedDeal.storeLogo,
            dealTitle: selectedDeal.dealName,
            dealDescription: selectedDeal.dealDesc,
            storeName: selectedDeal.storeName,
            storeLocation: selectedDeal.storeLocation,
            totalValue: String(selectedDeal.totalValue),
            discount: String(selectedDeal.discount),
            expiryDate: selectedDeal.expiryDate,
            membersRequired: String(membersRequired),
            creationDate: new Date().toISOString(),
            status: "active",
            receiptImage: "",
        };


        console.log("Request Data:", requestData); // Debugging: Log request payload
        try {
            const response = await axios.post(ApiUrls.createGroup, requestData, {
                headers: {
                    Authorization: `Bearer ${tokenWithoutQuotes}`,
                    "Content-Type": "application/json",
                },
            });

            console.log("API Response:", response.status, response.data); // Debugging: Log response
            SetGroupMemberData(response.data.group);
            if (response.status === 201 || response.status === 200) {
                setStatusMessage("Group Created Successfully!");
                setIsError(false);
                setTimeout(() => setShowNextStep(true), 1000);
            } else {
                throw new Error("Unexpected response from server");
            }
        } catch (error: any) {
            console.error("Error creating group:", error.response ? error.response.data : error.message); // Debugging: Log error
            setStatusMessage("Failed to create the group. Please try again.");
            setIsError(true);
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-opacity-10 flex justify-center items-center z-50 backdrop-blur-md">
                <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 border border-gray-300 relative">
                    <button className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-lg" onClick={closeModal}>✖</button>
                    {!showNextStep ? (
                        <>
                            <div className="flex items-center mb-4 gap-3">
                                <img src={selectedDeal.storeLogo} alt="Deal Logo" className="w-12 h-12 object-contain" />
                                <h2 className="font-bold">{selectedDeal.dealName}</h2>
                            </div>
                            <p className="text-gray-600 mt-2">{selectedDeal.dealDesc}</p>
                            <div className="mt-4">
                                <p><strong>Store:</strong> {selectedDeal.storeName}</p>
                                <p><strong>Location:</strong> {selectedDeal.storeLocation}</p>
                                <p><strong>Total Value:</strong> ${selectedDeal.totalValue}</p>
                                <p><strong>Discount:</strong> {selectedDeal.discount}%</p>
                                <p><strong>Expiry Date:</strong> {new Date(selectedDeal.expiryDate).toLocaleDateString()}</p>
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 font-semibold mb-2">Enter Members Required:</label>
                                <input type="number" className="w-full border border-gray-300 rounded-md p-2" value={membersRequired} onChange={handleInputChange} min="1" />
                            </div>
                            {statusMessage && (
                                <p className={`mt-4 text-center ${isError ? 'text-red-500' : 'text-green-500'}`}>{statusMessage}</p>
                            )}
                            <div className="flex justify-end mt-6">
                                <button className="mr-4 bg-gray-300 px-4 py-2 rounded-lg" onClick={closeModal}>Close</button>
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg" onClick={handleCreateGroupClick}>Create Group</button>
                            </div>
                        </>
                    ) : (
                        <ModelGroupMemberAdmin closeModal={closeModal} groupMemberData={groupMemberData}/>
                    )}
                </div>
            </div>
        </>
    );
};

export default ModelCreateGroup;
