/* @ts-nocheck */
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('userToken'));
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    // Initial token check
    setAuthToken(localStorage.getItem('userToken'));
    setIsLoading(false);

    // Interval to check for token updates
    const interval = setInterval(() => {
      const token = localStorage.getItem('userToken');
      setAuthToken(token);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Ensure nav items are always visible on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
          {/* Logo */}
          <div className="lg:col-span-3 flex items-center">
            <NavLink to="/" className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80">
              <img src="https://res.cloudinary.com/dehtc9uyy/image/upload/v1741969203/SplitDealLogo_wtfs6f.png" width={150} height={150} alt="Logo" />
            </NavLink>
          </div>


          {/* Button Group (Signup/Logout) */}
          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
            {!authToken && (
              <NavLink
                to="/signup"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-orange-500 text-white hover:bg-orange-600 focus:outline-hidden transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Sign Up
              </NavLink>
            )}

            {authToken && (
              <button
                onClick={logout}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-orange-500 text-white hover:bg-orange-600 focus:outline-hidden transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Logout
              </button>
            )}
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="pl-2 flex items-end lg:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-1.5 rounded-lg bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {navOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>


          {/* Navigation Menu (Collapse) */}
          <motion.div
            id="hs-navbar-hcail"
            className="overflow-hidden transition-all backdrop-blur-2xl p-2 sm:p-0 duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
            initial={false}
            animate={{ height: navOpen ? 'auto' : 0, opacity: navOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col cursor-pointer gap-y-4 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-x-7 lg:mt-0">
              <NavLink to="/" className="relative cursor-pointer hvr-underline-from-center inline-block text-lg text-black hover:text-gray-600 focus:outline-hidden">
                Home
              </NavLink>
              <NavLink to="/sidebar" className="inline-block hvr-underline-from-center cursor-pointer text-lg text-black hover:text-gray-600 focus:outline-hidden">
                Deals
              </NavLink>
              <NavLink to="/upload" className="inline-block hvr-underline-from-center cursor-pointer text-lg text-black hover:text-gray-600 focus:outline-hidden">
                Create Deal
              </NavLink>
              <NavLink to="/aboutus" className="inline-block hvr-underline-from-center cursor-pointer text-lg text-black hover:text-gray-600 focus:outline-hidden">
                About Us
              </NavLink>
              <NavLink to="/groups" className="inline-block hvr-underline-from-center cursor-pointer text-lg text-black hover:text-gray-600 focus:outline-hidden">
                Explore Groups
              </NavLink>
              {authToken && (
                <NavLink to="/chat" className="inline-block hvr-underline-from-center cursor-pointer text-lg text-black hover:text-gray-600 focus:outline-hidden">
                  My Groups
                </NavLink>
              )}
            </div>
          </motion.div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </div>
  );
};

export default Navbar;
