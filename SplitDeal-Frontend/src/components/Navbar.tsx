/* @ts-nocheck */
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import 'hover.css/css/hover-min.css'; // Make sure to import Hover.css


const Navbar = () => {
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('userToken'));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initial token check
    setAuthToken(localStorage.getItem('userToken'));
    setIsLoading(false);

    // Interval to check for token updates
    const interval = setInterval(() => {
      const token = localStorage.getItem('userToken');
      setAuthToken(token);
    }, 1000); // Checks every 1 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); 

  function logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');
    setAuthToken(null);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* ========== HEADER ========== */}
      <header className="absolute flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
        <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
          <div className="lg:col-span-3 flex items-center">
            {/* Logo */}
            <NavLink to="/" className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80">
              <img src="https://res.cloudinary.com/dehtc9uyy/image/upload/v1741969203/SplitDealLogo_wtfs6f.png" width={150} height={150} alt="Logo" />
            </NavLink>
          </div>

          {/* Button Group */}
          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
            {!authToken && (
              <NavLink
                to="/signup"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-orange-500 text-white hover:bg-orange-500 focus:outline-hidden focus:bg-orange-500 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Sign Up
              </NavLink>
            )}

            {authToken && (
              <button
                onClick={logout}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-orange-500 text-white hover:bg-orange-500 focus:outline-hidden focus:bg-orange-500 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Logout
              </button>
            )}
          </div>

          {/* Collapse (Navigation Menu) */}
          <div id="hs-navbar-hcail" className="hs-collapse hidden cursor-pointer overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6" aria-labelledby="hs-navbar-hcail-collapse">
            <div className="flex flex-col gap-y-4 gap-x-0 cursor-pointer mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
              <NavLink to="/" className="relative inline-block hvr-underline-from-center text-lg cursor-pointer text-black  hover:text-gray-600 focus:outline-hidden focus:text-gray-600">
                Home
              </NavLink>
              <NavLink to="/sidebar" className="inline-block hvr-underline-from-center text-lg cursor-pointer text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600">
                Deals
              </NavLink>
              <NavLink to="/aboutus" className="inline-block hvr-underline-from-center text-lg cursor-pointer text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600">
                About Us
              </NavLink>
              {/* <NavLink to="/contactus" className="inline-block hvr-underline-from-center text-lg cursor-pointer text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600">
                Contact Us
              </NavLink> */}
              <NavLink to="/groups" className="inline-block hvr-underline-from-center text-lg cursor-pointer text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600">
                Explore Groups
              </NavLink>
              {authToken && (<NavLink  to="/chat" className="inline-block hvr-underline-from-center text-lg  cursor-pointer text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600">
                My Groups
              </NavLink>)}
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </div>
  );
};

export default Navbar;
