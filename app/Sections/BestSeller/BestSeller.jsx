import React from "react";
import ShopBtn from "@/app/Components/ShopBtn/ShopBtn";
import Image from "next/image";
import Img from "../../assets/Img-1.png";
import Square from "../../assets/Two-square.svg";
import Btn from "@/app/Components/Btn/Btn";

const BestSeller = () => {
  return (
    <div className="BestSeller bg-white text-black">
      <div className="p-5">
        <div className="mt-10">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* First Div */}
            <div className="">
              <h5 className="text-3xl text-black font-bold">
                Our Best Sellers
              </h5>
              <p className="mt-5 text-sm text-black">
                Discover the favorites that have captured hearts and defined
                style. Our best sellers embody the perfect craftsmanship,
                design, and functionality blend. From timeless classics to
                modern essentials, these pieces have become beloved staples for
                our customers. Explore the curated selection that reflects the
                essence of what makes XD Leather Accessories exceptional.
              </p>
              <div className="mt-10 text-center">
                <Btn text="Our Collection" />
              </div>
            </div>
            {/* Second Div */}
            <div className="mb-5">
              <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                {/* Card One */}
                <div
                  className="bg-white p-3 shadow-xl border border-black"
                  style={{ borderRadius: "10%" }}
                >
                  <div className="">
                    <Image className="" src={Img} alt="Logo" />
                  </div>
                  <div className="text-center">
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
                {/* Card Two */}
                <div
                  className="bg-white p-3 shadow-xl border border-black"
                  style={{ borderRadius: "10%" }}
                >
                  <div className="">
                    <Image className="" src={Img} alt="Logo" />
                  </div>
                  <div className="text-center">
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
            {/* SVG */}
            <div className="mt-10">
              <Image src={Square} alt="Square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
