import React, { useEffect, useState } from "react";
import ChipTabs from "./ChipTabs";
import ApiUrls from "../Api/ApiUrls";

export default function Deals({
  selectedCategory,
  setSelectedCategory,
}) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deals, setDeals] = useState([]);
  const [hoveredDeal, setHoveredDeal] = useState(null); // Track hovered deal

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          ApiUrls.getCategory
        );
        const data = await response.json();
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
      const response = await fetch(
        `${ApiUrls.getDeal}/${categoryId}`
      );
      const data = await response.json();
      setDeals(data);
    } catch (error) {
      console.error("Error fetching deals:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <ChipTabs
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid gap-6 pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {deals.map((deal) => (
            <div
              key={deal._id}
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-sm flex flex-col"
              onMouseEnter={() => setHoveredDeal(deal._id)} // Set hovered deal
              onMouseLeave={() => setHoveredDeal(null)} // Reset hovered deal
            >
              {/* Show Expiry and Created Date on hover */}
              <div className="relative border-b-2 flex justify-center item-center" style={{borderColor:"grey"}}>
                <img
                  className="lg:h-42 md:h-32 m-2  border-gray-200 object-center transition-transform duration-300 transform hover:scale-105"
                  src={deal.storeLogo}
                  alt={deal.dealName}
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="tracking-widest border-gray-200 text-xs title-font font-medium text-gray-400 mb-1">
                  {deal.storeName}
                </h2>
                <h1 className="title-font pt-4 text-lg font-bold text-neutral-900 mb-3">
                  {deal.dealName}
                </h1>
                <p className="leading-relaxed mb-3">{deal.storeLocation}</p>

                <p className="leading-relaxed mb-3">
                  Expiry Date:<span> </span>
                  <span className="font-semibold">
                    {new Date(deal.expiryDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </p>

                <div className="flex items-center flex-wrap mt-1">
                  <a
                    className="text-orange-500 bg-orange-200 px-3 py-1 rounded-lg inline-flex items-center md:mb-2 lg:mb-0"
                    href={deal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Offer
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
