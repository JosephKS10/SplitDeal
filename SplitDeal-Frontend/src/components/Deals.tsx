import React, { useEffect, useState } from 'react';
import ChipTabs from "./ChipTabs";

export default function Deals() {
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deals, setDeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/category/get-categories");
        const data = await response.json();
        setCategories(data);

        if (data.length > 0) {
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

  const fetchDeals = async (categoryId: string) => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/deal/get-deals-by-category/${categoryId}`
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
        <ChipTabs categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className="grid gap-3 pt-5 grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {deals.map((deal) => (
          <a key={deal._id} href="#" className="group block p-4 border rounded-lg shadow-sm hover:shadow-md">
            <img
              alt={deal.dealName}
              src={deal.storeLogo}
              className="aspect-square w-full rounded-xl bg-gray-200 object-cover group-hover:opacity-75"
            />
            <h2 className="tracking-widest text-xs pt-2 title-font font-medium text-gray-400 mb-1">
              {deal.storeName} - {deal.storeLocation}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
              {deal.dealName}
            </h1>
            <p className="leading-relaxed mb-3 text-sm text-gray-600">{deal.dealDesc}</p>
            <p className="text-xs text-gray-500">Expires on: {new Date(deal.expiryDate).toLocaleDateString()}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-orange-500 font-semibold text-lg">
                ${(deal.totalValue * (1 - deal.discount / 100)).toFixed(2)}
              </span>
              <a className="text-orange-500 inline-flex items-center">
                Join Group
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
          </a>
        ))}
        </div>
      </div>
    </div>
  );
}
