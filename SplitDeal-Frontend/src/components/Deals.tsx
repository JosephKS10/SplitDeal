import React, { useEffect, useState } from "react";
import ChipTabs from "./ChipTabs";

export default function Deals({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string | null;
  setSelectedCategory: (categoryId: string) => void;
}) {
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://willow-bearing-march-mailing.trycloudflare.com/api/category/get-categories"
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

  const fetchDeals = async (categoryId: string) => {
    try {
      const response = await fetch(
        `https://willow-bearing-march-mailing.trycloudflare.com/api/deal/get-deals-by-category/${categoryId}`
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
        <div className="grid gap-3 pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {deals.map((deal) => (
            <div key={deal._id} className="border rounded-lg p-4 shadow-sm">
              <img src={deal.storeLogo} alt={deal.dealName} className="w-full rounded-xl object-cover" />
              <h2 className="text-lg font-medium">{deal.dealName}</h2>
              <p className="text-gray-500 py-4">{deal.dealDesc}</p>
              <p className="text-orange-500">${(deal.totalValue * (1 - deal.discount / 100)).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
