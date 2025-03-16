import React, { useEffect, useState } from 'react';
import { LineShadowTextDemo } from './LineShadowTextDemo';

const Upload = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // State for form inputs
  const [formData, setFormData] = useState({
    dealName: "",
    dealDesc: "",
    storeName: "",
    storeLocation: "",
    totalValue: "",
    discount: "",
    storeLogo: "",
    expiryDate: "",
    subCategoryId: "", // Add subCategoryId if needed
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://splitdeal.onrender.com/api/category/get-categories"
        );
        const data = await response.json();
        setCategories(data);

        if (data.length > 0 && !selectedCategory) {
          setSelectedCategory(data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        storeLogo: file,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dealData = {
      dealName: formData.dealName,
      dealDesc: formData.dealDesc,
      categoryId: selectedCategory,
      subCategoryId: formData.subCategoryId, // Add subCategoryId if needed
      storeName: formData.storeName,
      storeLocation: formData.storeLocation,
      totalValue: parseFloat(formData.totalValue),
      discount: parseFloat(formData.discount),
      storeLogo: formData.storeLogo, // You may need to upload this separately and get a URL
      expiryDate: new Date(formData.expiryDate).toISOString(),
    };

    try {
      const response = await fetch("https://splitdeal.onrender.com/api/deal/create-deal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dealData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Deal created successfully:", data);
        alert("Deal created successfully!");
      } else {
        console.error("Failed to create deal:", response.statusText);
        alert("Failed to create deal. Please try again.");
      }
    } catch (error) {
      console.error("Error creating deal:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      {/* Card Section */}
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Card */}
          <div className="bg-white pt-16 rounded-xl shadow-xs">
            <LineShadowTextDemo />

            <div className="pt-0 p-4 sm:pt-0 sm:p-7">
              {/* Grid */}
              <div className="space-y-4 sm:space-y-6">
                {/* Deal Name */}
                <div className="space-y-2 pt-10">
                  <label htmlFor="dealName" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                    Deal Name
                  </label>
                  <input
                    id="dealName"
                    name="dealName"
                    type="text"
                    className="py-1.5 border-2 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Nike Year Sale!"
                    value={formData.dealName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Store Name and Address */}
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="storeName" className="inline-block text-sm font-medium text-gray-800 mt-2.5 mb-1">
                        Store Name
                      </label>
                      <input
                        type="text"
                        name="storeName"
                        id="storeName"
                        className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2 border-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Nike Unite South Wharf"
                        value={formData.storeName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="storeLocation" className="inline-block text-sm font-medium text-gray-800 mt-2.5 mb-1">
                        Store Address
                      </label>
                      <input
                        type="text"
                        name="storeLocation"
                        id="storeLocation"
                        className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2 border-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="20 Convention Centre Pl, South Wharf VIC 3006"
                        value={formData.storeLocation}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Deal Category */}
                <div className="space-y-2">
                  <label htmlFor="category" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                    Deal Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="py-1.5 border-2 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    disabled={isLoading}
                    required
                  >
                    <option value="" disabled>{isLoading ? "Loading categories..." : "Select a category"}</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Deal Description */}
                <div className="space-y-2">
                  <label htmlFor="dealDesc" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                    Deal Description
                  </label>
                  <textarea
                    id="dealDesc"
                    name="dealDesc"
                    className="py-1.5 border-2 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                    rows={6}
                    placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                    value={formData.dealDesc}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Upload Brand Image */}
                <div className="space-y-2">
                  <label htmlFor="storeLogo" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                    Upload Brand Image
                  </label>
                  <label htmlFor="storeLogo" className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2">
                    <input
                      id="storeLogo"
                      name="storeLogo"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      required
                    />
                    <svg className="size-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                    </svg>
                    <span className="mt-2 block text-sm text-gray-800">
                      Browse your device or <span className="group-hover:text-orange-700 text-orange-600">drag 'n drop'</span>
                    </span>
                    <span className="mt-1 block text-xs text-gray-500">
                      Maximum file size is 2 MB
                    </span>
                  </label>
                </div>

                {/* Expiry Date and Discount */}
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="expiryDate" className="inline-block text-sm font-medium text-gray-800 mt-2.5 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        name="expiryDate"
                        id="expiryDate"
                        className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2 border-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="discount" className="inline-block text-sm font-medium text-gray-800 mt-2.5 mb-1">
                        Discount
                      </label>
                      <input
                        type="number"
                        name="discount"
                        id="discount"
                        className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2 border-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="25"
                        value={formData.discount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="discount" className="inline-block text-sm font-medium text-gray-800 mt-2.5 mb-1">
                        Total Value
                      </label>
                      <input
                        type="number"
                        name="totalValue"
                        id="totalValue"
                        className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2 border-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="25"
                        value={formData.totalValue}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Grid */}

              {/* Submit Button */}
              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit your Deal
                </button>
              </div>
            </div>
          </div>
          {/* End Card */}
        </form>
      </div>
      {/* End Card Section */}
    </div>
  );
};

export default Upload;