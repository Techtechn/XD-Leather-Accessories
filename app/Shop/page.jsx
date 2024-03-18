import React from "react";
import ShopHeader from "../Sections/ShopHeader/ShopHeader";
import FeaturedProduct from "../Sections/FeaturedProduct/FeaturedProduct";
import ShopSection from "../Sections/ShopSection/ShopSection";
import Newsletter from "../Sections/Newsletter/Newsletter";
import BestSeller from "../Sections/BestSeller/BestSeller";
import Connect from "../Sections/Connect/Connect";
import Stats from "../Sections/Stats/Stats";
import Footer from "../Sections/Footer/Footer";

const Shop = () => {
  return (
    <div className="Shop">
      <ShopHeader />
      <FeaturedProduct />
      <ShopSection />
      <Newsletter />
      <BestSeller />
      <Connect />
      <Stats />
      <Footer />
    </div>
  );
};

export default Shop;
