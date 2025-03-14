import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Authentication from "./components/Authentication";
import Deals from "./components/Deals";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";


const RouterPage = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/login" element={<LogIn />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default RouterPage;
