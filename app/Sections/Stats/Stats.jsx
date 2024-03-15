import React from "react";
import Image from "next/image";
import Arrow from "../../assets/Arrow-right.svg";

const Stats = () => {
  return (
    <div className="Stats">
      <div className="p-10 bg-[#E9E9E9]">
        <div className="text-center">
          <h2 className="text-[#F7B34A] text-2xl font-bold">
            We Design, We Create.
          </h2>
          <p className="mt-5 text-black text-sm">
            <span className="font-bold">XD Leather Accessories</span> is a South
            African brand that focuses on making leather a new trend for bags
            and <br /> accessories. Our journey is woven with a dedication to
            sourcing premium materials ethically, ensuring that <br /> every
            accessory is not just a fashion statement but a symbol of enduring
            quality.
          </p>
          <div className="mt-5 flex justify-center text-center items-center">
            <Image src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
