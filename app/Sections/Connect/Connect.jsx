import Btn from "@/app/Components/Btn/Btn";
import React from "react";

const Connect = () => {
  return (
    <div className="Connect">
      <div className="bg-[#102820] p-10 text-center">
        <div className="mt-5">
          <h1 className="text-white text-2xl">Stay Connect With Us!</h1>
          <p className="text-white text-sm mt-5">
            Finding Interest In Us, Stay Connected With Us From Today By Signing
            Up To Receive All <br /> The Latest News, Promotions & Updates
          </p>
          <div className="mt-5">
            <Btn text="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
