// @ts-nocheck
import { useEffect, useState } from "react";
import ChipTabs from "./ChipTabs";
import ApiUrls from "../Api/ApiUrls";
import ModelCreateGroup from "./ModelCreateGroup";
import axios from "axios";
import Loading from "./Loading";
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Deals({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deals, setDeals] = useState([]);
  const [hoveredDeal, setHoveredDeal] = useState(null);
  const [selectedDeal, setSelectedDeal] = useState(null); // For modal

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(ApiUrls.getCategory);
        console.log(response);
        const data = response.data;
        setCategories(data);

        if (data.length > 0 && !selectedCategory) {
          setSelectedCategory(data[0]._id);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchDeals(selectedCategory);
    }
  }, [selectedCategory]);



  const fetchDeals = async (categoryId) => {
    try {
      console.log(`${ApiUrls.getDeal}/${categoryId}` + "api")
      const response = await fetch(`${ApiUrls.getDeal}/${categoryId}`);
      const data = await response.json();
      setDeals(data);
    } catch (error) {
      console.error("Error fetching deals:", error);
    }
  };

  const closeModal = () => {
    setSelectedDeal(null);
  };

  if (isLoading) {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-28 h-28 border-8 p-2 text-orange-400 text-5xl animate-spin border-gray-300 flex items-center justify-center border-t-orange-400 rounded-full">
        <img src="https://i.ibb.co/4R2kB3sR/image.png" alt="" />
      </div>
        Searching the best deals for you...
    </div>
    );
  }

  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <ChipTabs
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />


    {/* <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16"> */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl py-4 font-bold tracking-tight text-gray-900 text-center mb-10">
          🔥 Exclusive Deals Just for You
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {deals.slice().reverse().map((deal) => (
            <motion.div
              key={deal._id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative bg-white backdrop-blur-md p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHoveredDeal(deal._id)}
              onMouseLeave={() => setHoveredDeal(null)}
            >
              <motion.div className="relative overflow-hidden rounded-md">
  <motion.img
    src={deal.storeLogo}
    alt={deal.dealName}
    className="w-full p-4 h-32 object-contain transition-transform duration-300"
    whileHover={{ scale: 1.05 }}
  />
</motion.div>

              <div className="mt-5">
                <h3 className="text-gray-700 text-sm font-medium uppercase tracking-wide">
                  {deal.storeName}
                </h3>
                <h2 className="text-lg font-semibold text-gray-900 mt-1">
                  {deal.dealName}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{deal.storeLocation}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Expiry Date:{' '}
                  <span className="font-semibold text-red-500">
                    {new Date(deal.expiryDate).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="mt-4 w-full cursor-pointer bg-neutral-900 text-white py-2 rounded-md font-medium shadow-md transition hover:bg-orange-600"
                  onClick={() => setSelectedDeal(deal)}
                >
                  Create Deal 🚀
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    {/* </div> */}



      </div>

      <ModelCreateGroup selectedDeal={selectedDeal} closeModal={closeModal} />
    </div>
  );
}
