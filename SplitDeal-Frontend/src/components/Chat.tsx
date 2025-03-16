/* @ts-nocheck */
import { useEffect, useState } from 'react';
// import { SidebarDemo } from './SidebarDemo';
// import IconSideNav from './IconSideNav';
// import { Example } from './RetractingSideBar';
import axios from 'axios';

const Chat = () => {
  const [items, setItems] = useState<{ name: string; count: number; groupId: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null); // Track active group
  const [messages, setMessages] = useState<{ sender: string; text: string; timestamp: string }[]>([]); // Store messages
  const [newMessage, setNewMessage] = useState(''); // Store the new message input
  const [userName, setUserName] = useState(''); // Store the user name
  // Fetch user ID and token from localStorage
  const userId = localStorage.getItem('userId') || '';
  const userIdWithoutQuotes = userId?.replace(/^"|"$/g, '');
  const yourToken = localStorage.getItem('userToken');
  const tokenWithoutQuotes = yourToken?.replace(/^"|"$/g, '');

  // Fetch group IDs for the user
  useEffect(() => {
    const fetchUserName = async () => {
      if (!userIdWithoutQuotes) {
        console.error('User ID not found in localStorage');
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://splitdeal.onrender.com/api/user/user/${userIdWithoutQuotes}`,
          {
            headers: {
              Authorization: `Bearer ${tokenWithoutQuotes}`,
            },
          }
        );

        if (response.data && response.data.user) {
          setUserName(response.data.user.name);
        }
      } catch (error) {
        console.error('Error fetching group IDs:', error);
      } finally {
        setIsLoading(false);
      }
    }

    const fetchGroupIds = async () => {
      if (!userIdWithoutQuotes) {
        console.error('User ID not found in localStorage');
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
            groupId, // Store the group ID
          }));

          setItems(groupItems);
        }
      } catch (error) {
        console.error('Error fetching group IDs:', error);
      } finally {
        fetchUserName();
      }
    };
    

    fetchGroupIds();
  }, [userIdWithoutQuotes, tokenWithoutQuotes]);

  // Fetch messages for the active group
  useEffect(() => {
    const fetchMessages = async () => {
      if (!activeGroupId) return;

      try {
        const response = await axios.get(
          `https://splitdeal.onrender.com/api/chat/get-messages/${activeGroupId}`,
          {
            headers: {
              Authorization: `Bearer ${tokenWithoutQuotes}`,
            },
          }
        );

        if (response.data) {
          setMessages(response.data); 
          console.log(response.data)
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [activeGroupId, tokenWithoutQuotes]);

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !activeGroupId) return;
  
    try {
      // Send the message to the backend
      const response = await axios.post(
        'https://splitdeal.onrender.com/api/chat/send-message',
        {
          user_name: userName,
          message: newMessage,
          groupID: activeGroupId,
        },
        {
          headers: {
            Authorization: `Bearer ${tokenWithoutQuotes}`,
          },
        }
      );
  
      if (response.data && response.data.message) {
        // Add the new message to the local state
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            user_name: userName, // Add the user name
            message: newMessage, // Add the message text
            time_of_message: new Date().toISOString(), // Add the timestamp
            groupID: activeGroupId, // Add the group ID
          },
        ]);
  
        // Clear the input field
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      {/* Content */}
      <div className="relative">
        <div className="fixed top-52 z-50 rounded-r-2xl w-48 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-neutral-900 text-white p-4">
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
                    onClick={() => setActiveGroupId(item.groupId)} // Set active group
                    className={`py-3 cursor-pointer px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ${
                      activeGroupId === item.groupId ? 'bg-gray-100' : ''
                    }`}
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
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto mt-8">
  {activeGroupId ? (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.user_name === userName ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`p-3 rounded-lg ${
              message.user_name === userName
                ? 'bg-orange-100 text-gray-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {/* Display the user's name */}
            <p className="text-xs font-semibold text-gray-600">
              {message.user_name}
            </p>
            {/* Display the message */}
            <p className="text-sm">{message.message}</p>
            {/* Display the timestamp */}
            <p className="text-xs text-gray-500 mt-1">
              {new Date(message.time_of_message).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-sm text-gray-400">Select a group to start chatting.</p>
  )}
</div>
        </div>

        {/* Input section */}
        <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6">
          {/* Textarea */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="relative">
              <textarea
                className="p-3 sm:p-4 border-2 border-slate-400 pb-12 sm:pb-12 block w-full rounded-lg sm:text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                disabled={!activeGroupId}
              ></textarea>

              {/* Toolbar */}
              <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-white">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  {/* Button Group */}
                  <div className="flex items-center">
                    {/* Mic Button */}
                    <button
                      type="button"
                      className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-hidden focus:bg-gray-100"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <line x1="9" x2="15" y1="15" y2="9" />
                      </svg>
                    </button>
                    {/* End Mic Button */}

                    {/* Attach Button */}
                    <button
                      type="button"
                      className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-hidden focus:bg-gray-100"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                      </svg>
                    </button>
                    {/* End Attach Button */}
                  </div>
                  {/* End Button Group */}

                  {/* Button Group */}
                  <div className="flex items-center gap-x-1">
                    {/* Send Button */}
                    <button
                      type="button"
                      onClick={handleSendMessage}
                      className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-orange-600 hover:bg-orange-500 focus:z-10 focus:outline-hidden focus:bg-orange-500"
                      disabled={!activeGroupId || !newMessage.trim()}
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