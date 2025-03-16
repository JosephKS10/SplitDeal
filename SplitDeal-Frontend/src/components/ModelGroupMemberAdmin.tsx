import React, { useState } from "react";
import axios from "axios";

interface GroupMemberData {
    userId: string;
    _id: string;
    dealId: string;
}

interface ModelGroupMemberAdminProps {
    closeModal: () => void;
    groupMemberData: GroupMemberData;
}

const ModelGroupMemberAdmin: React.FC<ModelGroupMemberAdminProps> = ({ closeModal, groupMemberData }) => {
    const [contribution, setContribution] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const userId = localStorage.getItem("userId");
    const userIdWithoutQuotes = userId?.replace(/^"|"$/g, "");

    const yourToken = localStorage.getItem("userToken");
    const tokenWithoutQuotes = yourToken?.replace(/^"|"$/g, "");

    // Handle File Selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImage(event.target.files[0]);
        }
    };

    // Function to Upload Image to Cloudinary
    const uploadToCloudinary = async (file: File): Promise<string | null> => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "UploadProductImage"); // ✅ Ensure this preset exists in Cloudinary

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/du5br7g8b/image/upload",
                formData
            );
            console.log("Cloudinary Upload Response:", response.data);
            setImage(response.data.url)
            return response.data.url; // ✅ Return the uploaded image URL
        } catch (error: any) {
            console.error("Cloudinary upload error:", error.response?.data || error.message);
            alert(`Upload failed: ${error.response?.data?.error?.message || error.message}`);
            return null;
        }
    };

    // Handle Form Submission
    const handleSubmit = async () => {
        if (!contribution || !image) {
            alert("Please enter a contribution amount and upload an image.");
            return;
        }

        setLoading(true);
        try {
            const imageUrl = await uploadToCloudinary(image);
            if (!imageUrl) {
                alert("Image upload failed. Please try again.");
                setLoading(false);
                return;
            }
            console.log(imageUrl)
            console.log(userIdWithoutQuotes)
            console.log(groupMemberData._id)
            console.log(groupMemberData.dealId)

            const payload = {
                userId: userIdWithoutQuotes,
                groupId: groupMemberData._id,
                dealId: groupMemberData.dealId,
                contribution: Number(contribution),
                productPhoto: imageUrl, // ✅ Ensure the image URL is included
                isVerified: true, // Admin is always verified by default
                role: "admin"
            };

            await axios.post("https://splitdeal.onrender.com/api/group-member/create-admin-group-member", payload, {
                headers: {
                    Authorization: `Bearer ${tokenWithoutQuotes}`,
                    "Content-Type": "application/json",
                },
            });

            alert("Successfully submitted!");
            closeModal();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Next Step</h2>

            <label className="block mb-2">Contribution Amount:</label>
            <input
                type="number"
                value={contribution}
                onChange={(e) => setContribution(e.target.value)}
                className="border p-2 w-full rounded mb-4"
                placeholder="Enter contribution"
            />

            <label className="block mb-2">Upload Product Image:</label>
            <input type="file" onChange={handleFileChange} className="mb-4" />

            <div className="flex justify-end mt-6">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
                <button className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={closeModal}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ModelGroupMemberAdmin;
