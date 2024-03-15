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
import Gallery from "../Sections/Gallery/Gallery";
import Connect from "../Sections/Connect/Connect";
import Stats from "../Sections/Stats/Stats";
import Footer from "../Sections/Footer/Footer";

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
      <Gallery />
      <Connect />
      <Stats />
      <Footer />
    </div>
  );
};

export default Landing;
