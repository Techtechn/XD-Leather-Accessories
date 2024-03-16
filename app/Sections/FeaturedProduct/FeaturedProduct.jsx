import React from "react";
import "./FeaturedProduct.scss";
import FeatureProductCard from "@/app/Components/FeatureProductCard/FeatureProductCard";

const FeaturedProduct = () => {
  return (
    <div className="FeaturedProduct">
      <div className="p-10">
        <div className="lg:px-6">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <h1 className="text-3xl font-semibold tracking-wide text-white">
                Featured <br /> <span className="font-extrabold">Products</span>
              </h1>
              <p className="mt-20 text-center text-white">
                Discover sophistication in every detail with our featured
                products. Handpicked for their exquisite design and superior
                craftsmanship, each piece reflects the essence of XD Leather
                Accessories. From iconic classics to modern essentials, these
                curated selections epitomize the timeless elegance and
                versatility that define our brand. Explore our featured
                collection—a showcase of style, quality, and enduring charm.
              </p>
            </div>
            <div className="">
              <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
