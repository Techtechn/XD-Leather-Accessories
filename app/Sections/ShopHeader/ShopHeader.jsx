import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./ShopHeader.scss";
import Image from "next/image";
import Img from "../../assets/ShopHeaderImg.png";
import Btn from "@/app/Components/Btn/Btn";

// #f2f7f8 bg
// #3d4f60 text
const ShopHeader = () => {
  return (
    <div
      className="ShopHeader"
      style={{ backgroundColor: "#F0F0F0", color: "#3d4f60" }}
    >
      <Nav />
      <div className="lg:px-6">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-xl text-center font-semibold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#E3CBA6" }} //#122231
              >
                We Design, We Create.
              </h1>
              <h1
                className="text-3xl text-left font-extrabold mt-3 tracking-wide shadow-2 sm:text-4xl"
                style={{ color: "#4D2D18" }} //#122231
              >
                Handcrafted <br />
                Leather Goods
              </h1>
              <p
                className="mt-5 text-sm leading-6 text-center"
                style={{ color: "#000" }} //#3d4f60 122231
              >
                Ready to make a purchase of Our genuinely crafted leather
                products meticulously designed just for you and made with the
                finest leather. Make a purchase that transcends utility and
                embodies enduring sophistication. Make a statement; make it
                yours.
              </p>
            </div>
            <div className="text-center mt-5">
              {/* <button className="bg-transparent text-gray-900 ml-3 font-semibold border text-sm p-2 m-1 rounded-sm border-black">
                Feel the Innovation
              </button> */}
              <Btn text="Shop" />
            </div>
          </div>
          <div className="text-center flex justify-center items-center">
            <Image className="" src={Img} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
