/* @ts-nocheck */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Upload from "./components/Upload";
import { SidebarDemo } from "./components/SidebarDemo";
import Chat from "./components/Chat";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Footer from "./components/Footer";
import Groups from "./components/Groups";
// import NavbarNew from "./components/NavbarNew";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sidebar" element={<SidebarDemo />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/signup/login" element={<LogIn />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
