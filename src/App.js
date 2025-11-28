import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TravelSection from "./components/TravelSection";
import HolidayDestinations from "./components/HolidayDestination";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";

import LatestResort from "./pages/LatestResort";
import IndianJungles from "./pages/IndianJungles";
import IndianDesserts from "./pages/IndianDesserts";
import ReligiousIndia from "./pages/ReligiousIndia";
import ReligiousOutsideIndia from "./pages/ReligiousOutsideIndia";
import HillStationsOutside from "./pages/HillStationsOutside";
import HillStationsIndia from "./pages/HillStationsIndia";
import BeachesIndia from "./pages/BeachesIndia";
import BeachesOutsideIndia from "./pages/BeachesOutsideIndia";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TravelSection />
              <HolidayDestinations />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/latest-resort" element={<LatestResort />} />
        <Route path="/india-jungles" element={<IndianJungles />} />
        <Route path="/india-deserts" element={<IndianDesserts />} />
        <Route path="/religious-india" element={<ReligiousIndia />} />
        <Route path="/religious-outside" element={<ReligiousOutsideIndia />} />
        <Route path="/hill-outside" element={<HillStationsOutside />} />
        <Route path="/hill-india" element={<HillStationsIndia />} />
        <Route path="/beaches-india" element={<BeachesIndia />} />
        <Route path="/beaches-outside" element={<BeachesOutsideIndia />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
