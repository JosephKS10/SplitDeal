import React, { useEffect, useState } from "react";
import ChipTabs from "./ChipTabs";

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
          "https://kerry-lan-une-checked.trycloudflare.com/api/category/get-categories"
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
        `https://kerry-lan-une-checked.trycloudflare.com/api/deal/get-deals-by-category/${categoryId}`
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
              <div className="relative">
  <img
    className="lg:h-42 md:h-32 p-2 w-full border-b-2 border-gray-200 object-center transition-transform duration-300 transform hover:scale-105"
    src={deal.storeLogo}
    alt={deal.dealName}
  />
  {/* {hoveredDeal === deal._id && (
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent flex flex-col justify-end p-2">
      <p className="text-white text-sm">
        Expiry Date: {new Date(deal.expiryDate).toLocaleDateString()}
      </p>
      <p className="text-white text-sm">
        Created At: {new Date(deal.createdAt).toLocaleDateString()}
      </p>
    </div>
  )} */}
</div>


              <div className="p-5 flex flex-col flex-grow">
                <h2 className="tracking-widest border-gray-200 text-xs title-font font-medium text-gray-400 mb-1">
                  {deal.storeName}
                </h2>
                <h1 className="title-font py-4 text-lg font-bold text-neutral-900 mb-3">
                  {deal.dealName}
                </h1>
                <p className="leading-relaxed mb-3">{deal.dealDesc}</p>

               

                <div className="flex items-center flex-wrap mt-auto">
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
                  <span className="text-green-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                    $ {deal.totalValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
