import React from "react";
import Image from "next/image";
import Img from "../../assets/Img-4.png";
import Btn from "@/app/Components/Btn/Btn";
import BtnTransparent from "@/app/Components/BtnTransparent/BtnTransparent";

const Craftsmanship = () => {
  return (
    <div className="Craftsmanship">
      <div className="p-3 bg-white">
        <div className="bg-[#C1E1C1] rounded-xl p-5">
          {/* CARDS */}
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="">
                <Image
                  className="object-fit object-fill"
                  src={Img}
                  alt="Image"
                  // style={{ height: "80%" }}
                />
              </div>
              <div className="border border-[#102820] p-10 rounded-xl">
                <h2 className="text-black mt-5 text-3xl">Customization</h2>
                <h6 className="text-black mt-5 text-xl">
                  Your Style, Your Way
                </h6>
                <p className="text-black mt-5 text-sm">
                  Personalize your leather goods to make them uniquely yours.
                  Choose from a range of customization options, from
                  monogramming to selecting the perfect color and finish.
                </p>
                {/* BUTTONS */}
                <div className="mt-5 flex justify-around">
                  <BtnTransparent text="Customization Options" />
                  <Btn text="Our Collection" />
                </div>
                {/* BUTTONS */}
              </div>
            </div>
          </div>
          {/* CARDS */}
          {/* Title */}
          <div className="mt-10">
            <div className="p-10">
              <h4 className="text-black text-2xl">Craftsmanship</h4>
              <h6 className="text-black mt-4 text-lg font-semibold">
                We Design, We Create.
              </h6>
              <p className="mt-3 text-sm">
                Our artisans bring decades of experience to each creation,{" "}
                <br />
                ensuring that every product reflects the skill, precision, and{" "}
                <br />
                passion embedded in our craft.
              </p>
            </div>
          </div>
          {/* Title */}
          {/* Cards */}
          <div className="mt-5">
            <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="Card">
                <h1 className="ml-5">
                  <span className="p-3 h-3 w-3 mr-3 rounded-full text-white bg-[#102820]">
                    #
                  </span>{" "}
                  <span className="font-semibold">Design</span>
                </h1>
                <p className="text-black text-lg mt-5">
                  Immerse yourself in the artistry of design as our craftsmen
                  conceptualize each piece.
                </p>
              </div>
              <div className="Card">
                <h1 className="ml-5">
                  <span className="p-3 h-3 w-3 mr-3 rounded-full text-white bg-[#102820]">
                    #
                  </span>{" "}
                  <span className="font-semibold">Design</span>
                </h1>
                <p className="text-black text-lg mt-5">
                  Immerse yourself in the artistry of design as our craftsmen
                  conceptualize each piece.
                </p>
              </div>
              <div className="Card">
                <h1 className="ml-5">
                  <span className="p-3 h-3 w-3 mr-3 rounded-full text-white bg-[#102820]">
                    #
                  </span>{" "}
                  <span className="font-semibold">Design</span>
                </h1>
                <p className="text-black text-lg mt-5">
                  Immerse yourself in the artistry of design as our craftsmen
                  conceptualize each piece.
                </p>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="mt-5">
            <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="Card">
                <h1 className="ml-5">
                  <span className="p-3 h-3 w-3 mr-3 rounded-full text-white bg-[#102820]">
                    #
                  </span>{" "}
                  <span className="font-semibold">Design</span>
                </h1>
                <p className="text-black text-lg mt-5">
                  Immerse yourself in the artistry of design as our craftsmen
                  conceptualize each piece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craftsmanship;
