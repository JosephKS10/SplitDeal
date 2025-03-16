import React, { useEffect, useState } from "react";
import ChipTabs from "./ChipTabs";
import ApiUrls from "../Api/ApiUrls";
import ModelCreateGroup from "./ModelCreateGroup";
import axios from "axios";
import Loading from "./Loading";

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
        <>
          <Loading />
        </>
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



        <div className="grid gap-6 pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {deals.map((deal) => (
            <div
              key={deal._id}
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-sm flex flex-col "
              onMouseEnter={() => setHoveredDeal(deal._id)}
              onMouseLeave={() => setHoveredDeal(null)}
            >
              <div
                className="relative border-b-2 flex justify-center items-center"
                style={{ borderColor: "grey" }}
              >
                <img
                  className="lg:h-42 md:h-32 m-2 border-gray-200 object-center transition-transform duration-300 transform hover:scale-105"
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
                  Expiry Date:{" "}
                  <span className="font-semibold">
                    {new Date(deal.expiryDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </p>

                <div className="flex items-center flex-wrap mt-1">
                  <button
                    className="cursor-pointer text-orange-500 bg-orange-200 px-3 py-1 rounded-lg inline-flex items-center md:mb-2 lg:mb-0"
                    onClick={() => setSelectedDeal(deal)}
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

{/* <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {deals.map((deal) => (
            <div  key={deal._id} className="group relative" onMouseEnter={() => setHoveredDeal(deal._id)}
            onMouseLeave={() => setHoveredDeal(null)}>
              <img
                src={deal.storeLogo}
                alt={deal.dealName}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                    <a href={deal.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {deal.dealName}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{deal.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}



      </div>

      <ModelCreateGroup selectedDeal={selectedDeal} closeModal={closeModal} />
    </div>
  );
}
