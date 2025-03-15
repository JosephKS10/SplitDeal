import React from "react";

interface Category {
  _id: string;
  name: string;
}

interface ChipTabsProps {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (categoryId: string) => void;
}

const ChipTabs: React.FC<ChipTabsProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      <ul className="flex  items-center space-x-4 p-2">
        {categories.map((category) => (
          <button
            key={category._id}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === category._id
                ? "bg-orange-500 text-white font-bold"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category._id)}
          >
            {category.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default ChipTabs;
