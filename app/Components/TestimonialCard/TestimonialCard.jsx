import React from "react";
import Image from "next/image";
import Quotes from "../../assets/Quotemarks-left.svg";

const TestimonialCard = () => {
  return (
    <div className="TestimonialCard">
      <div
        className="border border-white rounded-xl p-5 text-center bg-transparent"
        style={{ transform: "scale(0.9)" }}
      >
        <p className="text-white text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere porro
          illo quae non vero perferendis est animi iste. Nobis, placeat. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Omnis, veritatis.
        </p>
        <h6 className="mt-3 text-[#F7B34A]">~ Njabulo Nkosi</h6>
        <div className="flex justify-center items-center">
          <Image className="w-16" src={Quotes} alt="Quotes" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
