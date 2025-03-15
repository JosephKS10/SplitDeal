import React from "react";

const ModelCreateGroup = ({ selectedDeal, closeModal }) => {
  if (!selectedDeal) return null; // Don't render anything if no deal is selected

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-lg font-bold">{selectedDeal.dealName}</h2>
        <p className="text-gray-500 mt-2">{selectedDeal.storeName}</p>
        <p className="text-gray-700 mt-4">
          Expiry Date:{" "}
          <span className="font-semibold">
            {new Date(selectedDeal.expiryDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </p>

        <div className="flex justify-end mt-6">
          <button
            className="mr-4 bg-gray-300 px-4 py-2 rounded-lg text-gray-700"
            onClick={closeModal}
          >
            Close
          </button>
          <a
            href={selectedDeal.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          >
            Go to Offer
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModelCreateGroup;
