import ShopBy from "@/app/Components/ShopBy/ShopBy";
import React from "react";

const ShopSection = () => {
  return (
    <div className="ShopSection">
      <div className="p-10">
        <div className="bg-[#102820] text-white p-10 rounded-lg shadow-lg">
          <div className="">
            <h2 className="text-2xl text-bold text-[#FF9B00]">Shop By</h2>
          </div>
        </div>
        <div className="">
          <ShopBy />
        </div>
        <div className="text-center mt-10">
          <button className="p-3 text-black border border-black">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
