// @ts-nocheck
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Groups = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchGroups = async () => {
      try {
        const response = await fetch('https://splitdeal.onrender.com/api/group/get-groups');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setProducts(data); // Assuming the API returns an array of products
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []); // Empty dependency array means this runs once on mount

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
            <p className="py-10 text-lg/8  text-gray-600">
              Looking for the best deals but don’t want to shop alone? With SplitDeal’s Group Buying, you can team up with other shoppers, share exclusive deals, and unlock bigger discounts together!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.slice().reverse().map((product) => (
          // {products.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg">
            <img
              alt={product.dealLogo}
              src={product.dealLogo}
              className="w-full p-4 h-32 object-contain border-gray-200 transition-transform duration-300"
            />



            
            {/* Text container */}
            <div>
            <div className="absolute top-0 left-0 p-4 text-black  rounded-full ">
              {/* <p className='text-sm font-regular uppercase'>Member required : {product.membersRequired}</p> */}
            </div>
            </div>
            
            <div className="mt-4 flex justify-between">
              <div>
            <p className='text-sm font-medium uppercase text-gray-500'>required : <span className='font-black text-bold text-black'>{product.membersRequired} </span> </p>
                    <p className='text-xs uppercase font-semibold text-neutral-400'>{product.storeLocation}</p>
                <h3 className="text-sm py-3 text-gray-700">
                  <a className='font-bold ' href={product.href}>
                    <span aria-hidden="true" className="absolute  inset-0 " />
                    {product.dealTitle}
                  </a>
                </h3>
                <p className="py-3 text-sm text-gray-500">Until - 
                <span className="font-bold text-red-500 pl-1">
  {new Date(product.expiryDate).toLocaleDateString("en-US", {
    weekday: "short", // abbreviated weekday (Mon)
    year: "numeric",
    month: "short", // abbreviated month (Feb)
    day: "numeric",
  })}
   </span>

</p>



<button class="cursor-pointer flex items-center fill-lime-400 bg-lime-100 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2">
  <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span class="text-sm px-2 text-lime-500 font-semibold">Join Now</span>
</button>



              </div>
              
              <p className="text-sm font-bold text-green-500">{product.discount}%</p>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;