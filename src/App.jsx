import React from "react";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products"
import ReviewSection from "./components/Review";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Products/>
      <ReviewSection/>
      <PricingSection/>
      <Footer />
    </div>
  );
};

export default App;
