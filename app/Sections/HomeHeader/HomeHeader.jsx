import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./HomeHeader.scss";
import Image from "next/image";
import Logo from "../../assets/XD-logo.png";
import Btn from "@/app/Components/Btn/Btn";

// #f2f7f8 bg
// #3d4f60 text
const HomeHeader = () => {
  return (
    <div
      className="HomeHeader"
      // style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <Nav />
      <div className="lg:px-6 my-10">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-2xl text-center font-extrabold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#fff" }} //#122231
              >
                XD Leather Accessories
              </h1>
              <h1
                className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#E3CBA6" }} //#122231
              >
                We Design, We Create.
              </h1>
              <p
                className="mt-5 text-sm leading-6 text-center"
                style={{ color: "#fff" }} //#3d4f60 122231
              >
                <span className="font-bold">XD Leather Accessories</span> is a
                South African brand that focuses on making leather a new trend
                for bags and accessories. Our journey is woven with a dedication
                to sourcing premium materials ethically, ensuring that every
                accessory is not just a fashion statement but a symbol of
                enduring quality.
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
            <Image className="" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
