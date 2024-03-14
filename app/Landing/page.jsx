import React from "react";
import HomeHeader from "../Sections/HomeHeader/HomeHeader";
import Collection from "../Sections/Collection/Collection";
import AboutSection from "../Sections/AboutSection/AboutSection";
import BestSeller from "../Sections/BestSeller/BestSeller";
import WhyUs from "../Sections/WhyUs/WhyUs";
import Join from "../Sections/Join/Join";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Craftsmanship from "../Sections/Craftsmanship/Craftsmanship";
import Blog from "../Sections/Blog/Blog";

const Landing = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <Collection />
      <AboutSection />
      <BestSeller />
      <WhyUs />
      <Join />
      <Testimonial />
      <Craftsmanship />
      <Blog />
    </div>
  );
};

export default Landing;
