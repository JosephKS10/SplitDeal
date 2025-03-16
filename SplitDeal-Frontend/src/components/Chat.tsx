import React, { useEffect, useState } from 'react';
import { SidebarDemo } from './SidebarDemo';
import IconSideNav from './IconSideNav';
import { Example } from './RetractingSideBar';
import axios from 'axios';

const Chat = () => {
  const [items, setItems] = useState<{ name: string; count: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user ID and token from localStorage
  const userId = localStorage.getItem("userId") || "";
  const userIdWithoutQuotes = userId?.replace(/^"|"$/g, "");
  const yourToken = localStorage.getItem("userToken");
  const tokenWithoutQuotes = yourToken?.replace(/^"|"$/g, "");

  // Fetch group IDs for the user
  useEffect(() => {
    const fetchGroupIds = async () => {
      console.log(userIdWithoutQuotes);
      if (!userIdWithoutQuotes) {
        console.error("User ID not found in localStorage");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://splitdeal.onrender.com/api/group-member/get-group-ids/${userIdWithoutQuotes}`,
          {
            headers: {
              Authorization: `Bearer ${tokenWithoutQuotes}`,
            },
          }
        );

        if (response.data && response.data.groupIds) {
          // Transform the group IDs into the required format for `items`
          const groupItems = response.data.groupIds.map((groupId: string) => ({
            name: `Group ${groupId}`, // You can replace this with the actual group name if available
            count: 0, // Replace with the actual count of unread messages if available
          }));

          setItems(groupItems);
        }
      } catch (error) {
        console.error("Error fetching group IDs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGroupIds();
  }, [userId, tokenWithoutQuotes]);

  return (
    <>
      {/* Content */}
      <div className="relative ">
        <div className="fixed  top-52 z-50 rounded-r-2xl w-48 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-neutral-900  text-white p-4">
          <h2 className="text-xl font-semibold mb-4">Chats</h2>

          {/* Single Chat */}
          <div className="mb-4">
            {isLoading ? (
              <p className="text-sm text-gray-400">Loading groups...</p>
            ) : items.length > 0 ? (
              items.map((item, index) => (
                <div key={index} className="py-3">
                <button
                  type="button"
                  className="py-3 cursor-pointer px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                >
                  {item.name.length > 10 ? `${item.name.slice(0, 10)}...` : item.name}
                  <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-green-500 text-white">
                    {item.count}
                  </span>
                </button>
              </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">No groups found.</p>
            )}
          </div>

          {/* Group Chats */}
        </div>

        {/* Rest of the chat UI */}
        <div className="py-10 lg:py-24">
          {/* Title */}
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
            <a
              className="inline-block mb-4 flex-none focus:outline-hidden focus:opacity-80"
              href="../examples/html/ai-with-sidebar.html"
              aria-label="SplitDeal"
            >
              <img
                src="https://res.cloudinary.com/dehtc9uyy/image/upload/v1741969203/SplitDealLogo_wtfs6f.png"
                width={150}
                height={150}
                alt="Logo"
              />
            </a>

            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Welcome to SplitDeal
            </h1>
            <p className="mt-3 text-gray-600">
              We help people to find, share and enjoy the best deals in market.
            </p>
          </div>
          {/* End Title */}

          {/* Chat bubbles and other UI elements */}
          {/* ... */}
        </div>

        {/* Input section */}
        <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6">
          {/* Textarea */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">

            {/* Input */}
            <div className="relative">
              <textarea
                className="p-3 sm:p-4 border-2 border-slate-400 pb-12 sm:pb-12 block w-full  rounded-lg sm:text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Ask me anything..."
              ></textarea>

              {/* Toolbar */}
              <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-white">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  {/* Button Group */}
                  <div className="flex items-center">

                  </div>
                  {/* End Button Group */}

                  {/* Button Group */}
                  <div className="flex items-center gap-x-1">
                    {/* End Mic Button */}

                    {/* Send Button */}
                    <button
                      type="button"
                      className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-orange-600 hover:bg-orange-500 focus:z-10 focus:outline-hidden focus:bg-orange-500"
                    >
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg>
                    </button>
                    {/* End Send Button */}
                  </div>
                  {/* End Button Group */}
                </div>
              </div>
              {/* End Toolbar */}
            </div>
            {/* End Input */}
          </div>
          {/* End Textarea */}
        </div>
      </div>
      {/* End Content */}
    </>
  );
};

export default Chat;