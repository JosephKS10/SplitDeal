import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";


const RouterPage = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default RouterPage;
