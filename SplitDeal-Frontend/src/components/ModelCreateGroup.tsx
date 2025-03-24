// @ts-nocheck

import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiUrls from "../Api/ApiUrls";
import ModelGroupMemberAdmin from "./ModelGroupMemberAdmin";
import { X, Users, Store, MapPin, Tag, Calendar, CirclePercent } from "lucide-react";
import Alert from "./Alert";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

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
            setStatusMessage(
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-3 rounded-lg flex items-center gap-2 shadow-lg"
                >
                    <AlertTriangle size={20} className="animate-pulse" />
                    Please log in or sign up to create a deal. <Link to="/signup"><signUp className="underline">Sign Up</signUp></Link>
                </motion.div>
            );
            setIsError(true);
        }
    };

    return (
        <>
             <motion.div
      className="fixed inset-0 bg-white/40 flex justify-center items-center z-50 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 border border-gray-800 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700  -white" onClick={closeModal}>
          <X size={24} />
        </button>

        {!showNextStep ? (
          <>
            {/* Deal Header */}
            <div className="flex items-center mb-4 gap-3">
              <motion.img
                src={selectedDeal.storeLogo}
                alt="Deal Logo"
                className="w-16 h-16 object-contain rounded-md shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              />
              
              <h2 className="font-bold text-lg ">{selectedDeal.dealName}</h2>
            </div>

            {/* Deal Description */}
            <p className="text-gray-600  mt-2">{selectedDeal.dealDesc}</p>

            {/* Deal Details */}
            <motion.div
              className="mt-4 space-y-2 text-gray-700 "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="flex items-center gap-2"><Store size={18} className="text-orange-500" /> <strong>Store:</strong> {selectedDeal.storeName}</p>
              <p className="flex items-center gap-2"><MapPin size={18} className="text-blue-500" /> <strong>Location:</strong> {selectedDeal.storeLocation}</p>
              <p className="flex items-center gap-2"><Tag size={18} className="text-yellow-500" /> <strong>Total Value:</strong> ${selectedDeal.totalValue}</p>
              <p className="flex items-center gap-2"><CirclePercent size={18} className="text-green-500" /> <strong>Discount:</strong> {selectedDeal.discount}%</p>
              <p className="flex items-center gap-2"><Calendar size={18} className="text-violet-500" /> <strong>Expiry Date:</strong> <span className="text-red-500 font-semibold">{new Date(selectedDeal.expiryDate).toLocaleDateString()}</span></p>
            </motion.div>

            {/* Members Required Input */}
            <div className="mt-4">
              <label className="block text-gray-700  font-semibold mb-2">Enter Members Required:</label>
              <motion.input
                type="number"
                className="w-full border border-gray -600 rounded-md p-2 -800 "
                value={membersRequired}
                onChange={handleInputChange}
                min="1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              />
            </div>

            {/* Status Message */}
            {statusMessage && (
              <motion.p
                className={`mt-4 text-center ${isError ? 'text-red-500' : 'text-green-500'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {statusMessage}
              </motion.p>
            )}

            {/* Buttons */}
            <motion.div className="flex justify-end mt-6 gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <button className="bg-gray cursor-pointer hover:bg-neutral-200 -700 -gray-600 text-gray-800  px-4 py-2 rounded-lg transition" onClick={closeModal}>
                Close
              </button>
              <motion.button
                className="bg-gradient-to-r cursor-pointer bg-orange-500  text-white px-4 py-2 rounded-lg shadow-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCreateGroupClick}
              >
                Create Group
              </motion.button>
            </motion.div>
          </>
        ) : (
          <ModelGroupMemberAdmin closeModal={closeModal} groupMemberData={groupMemberData} />
        )}
      </motion.div>
    </motion.div>
        </>
    );
};

export default ModelCreateGroup;
