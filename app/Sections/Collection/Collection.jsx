import React from "react";
import "./Collection.scss";
import Image from "next/image";
import Img from "../../assets/Img-1.png";
import Btn from "@/app/Components/Btn/Btn";
import BtnTransparent from "@/app/Components/BtnTransparent/BtnTransparent";
import ShopBtn from "@/app/Components/ShopBtn/ShopBtn";

const Collection = () => {
  return (
    <div
      className="Collection"
      // style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <div className="lg:px-6">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-xl text-center font-extrabold tracking-wide shadow-2 sm:text-xl"
                style={{ color: "#fff" }} //#122231
              >
                New Collection
              </h1>
              <h1 className="text-3xl text-center font-extrabold tracking-wide shadow-2 sm:text-4xl text-[#F7B34A] ">
                Ukuzithemba <br /> Collection
              </h1>
              <div className="text-right">
                <BtnTransparent text="Explore" />
              </div>
              <p
                className="mt-5 text-sm leading-6 text-left"
                style={{ color: "#fff" }} //#3d4f60 122231
              >
                ` This Collection is more than just a collection of leather
                accessories, it`s a CONFIDENCE boosting experience. It`s also a
                reminder that the right accessory can transform not only your
                appearance but your mindset, allowing you to walk through life
                with your head held high `
              </p>
              <p className="mt-3 text-[#F7B34A] font-bold text-center">
                ~ Creative Director of XD Leather Accessories.
              </p>
            </div>
            {/* <div className="text-center mt-5">
              <Btn text="Shop" />
            </div> */}
          </div>
          <div className="text-center flex justify-center items-center pl-3 max-w-xl lg:py-16">
            <div className="bg-white p-3" style={{ borderRadius: "10%" }}>
              <div className="">
                <Image className="" src={Img} alt="Logo" />
              </div>
              <div className="">
                <h6 className="text-black mt-3 text-lg font-medium">
                  Qhawe Body Harness
                </h6>
                <h4 className="text-[#F7B34A] mt-3 text-xl font-semibold">
                  R1099.99
                </h4>
                <div className="mt-3 mb-3">
                  <ShopBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
