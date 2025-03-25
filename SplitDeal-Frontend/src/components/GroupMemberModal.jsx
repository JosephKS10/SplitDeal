// @ts-nocheck
import React, { useState } from "react";
import axios from "axios";

const GroupMemberModal = ({ groupId, dealId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contribution, setContribution] = useState("");
  const [productPhoto, setProductPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setMessage(""); // Reset message on open/close
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("userId", "USER_ID_HERE"); // Replace with actual user ID
    formData.append("groupId", groupId);
    formData.append("dealId", dealId);
    formData.append("contribution", contribution);
    if (productPhoto) {
      formData.append("productPhoto", productPhoto);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/group-member/create-team-member",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(response.data.msg);
    } catch (error) {
      setMessage("Error joining group. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Join Now Button */}
      <button 
        onClick={toggleModal} 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Join Now
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Join Group</h2>

            <form onSubmit={handleSubmit}>
              {/* Contribution Amount */}
              <label className="block text-gray-700">Contribution Amount</label>
              <input
                type="number"
                value={contribution}
                onChange={(e) => setContribution(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />

              {/* Product Photo Upload */}
              <label className="block text-gray-700 mt-4">Upload Product Photo</label>
              <input
                type="file"
                onChange={(e) => setProductPhoto(e.target.files[0])}
                className="w-full mt-1"
              />

              {/* Message Display */}
              {message && <p className="text-green-600 mt-2">{message}</p>}

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  {loading ? "Joining..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupMemberModal;