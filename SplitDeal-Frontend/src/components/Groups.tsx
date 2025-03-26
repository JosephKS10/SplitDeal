// @ts-nocheck
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Groups = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchGroups = async () => {
      try {
        const response = await fetch('https://splitdeal.onrender.com/api/group/get-groups');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setProducts(data); // Assuming the API returns an array of products
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []); // Empty dependency array means this runs once on mount

  // Function to open the modal and set the selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="lg:pt-4 lg:pr-8">
          <div className="lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-orange-500">FIND & SAVE</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Find Deals
            </p>
            <p className="py-10 text-lg/8 text-gray-600">
              Looking for the best deals but don’t want to shop alone? With SplitDeal’s Group Buying, you can team up with other shoppers, share exclusive deals, and unlock bigger discounts together!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group block overflow-hidden">
              <div className="overflow-hidden rounded-lg">
                <img
                  alt={product.imageAlt}
                  src={product.dealLogo}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-transform duration-300 group-hover:scale-110 xl:aspect-7/8"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.dealTitle}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button
                onClick={() => openModal(product)}
                className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Join Me
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <h2 className="text-xl font-semibold mb-4">{selectedProduct.dealTitle}</h2>
            <img
              src={selectedProduct.dealLogo}
              alt={selectedProduct.imageAlt}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProduct.description || 'No description available.'}</p>
            <p className="text-lg font-medium text-gray-900 mb-4">Price: {selectedProduct.price}</p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Handle the "Join Me" action here
                  alert(`You joined the group for ${selectedProduct.dealTitle}`);
                  closeModal();
                }}
                className="ml-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Confirm Join
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Groups;