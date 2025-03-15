import React, { useEffect, useState } from 'react';
import ChipTabs from "./ChipTabs";
  
  export default function Deals() {
    const [categories, setCategories] = useState([]); // State to hold the categories data
    const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch categories data from the API
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://3a51-2001-8003-513a-4800-adc7-c9f1-76a5-e508.ngrok-free.app/api/category/get-categories');
        const product = await response.json();
        setCategories(product); // Set fetched data to state
        console.log(product);
        setIsLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Check if data is loading or if there's no data
  if (isLoading) {
    return <div>Loading...</div>;
  }
    return (
      <>
         <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="sr-only">Products</h2> */}
        <ChipTabs/>
        <div className="grid gap-3 pt-5 grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-xl bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h2 className="tracking-widest text-xs pt-2 title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">Join Group
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                $ 500
              </span>
            </div>
            </a>
            
          ))}
        </div>
      </div>
    </div>
      </>
    )
  }
  