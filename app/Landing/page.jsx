import React from "react";
import HomeHeader from "../Sections/HomeHeader/HomeHeader";
import Collection from "../Sections/Collection/Collection";
import AboutSection from "../Sections/AboutSection/AboutSection";

const Landing = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <Collection />
      <AboutSection />
    </div>
  );
};

export default Landing;
