import React from "react";
import HomeHeader from "../Sections/HomeHeader/HomeHeader";
import Collection from "../Sections/Collection/Collection";
import AboutSection from "../Sections/AboutSection/AboutSection";
import BestSeller from "../Sections/BestSeller/BestSeller";
import WhyUs from "../Sections/WhyUs/WhyUs";
import Join from "../Sections/Join/Join";

const Landing = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <Collection />
      <AboutSection />
      <BestSeller />
      <WhyUs />
      <Join />
    </div>
  );
};

export default Landing;
