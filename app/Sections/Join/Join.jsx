import React from "react";
import "./Join.scss";
import Image from "next/image";
import Tiktok from "../../assets/Tiktok.svg";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";

const Join = () => {
  return (
    <div className="Join">
      <div className="p-3 bg-white">
        <div className="bg-[#102820] rounded-xl">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* First Div */}
            <div className="text-center p-10 bg-[#E3CBA6] title">
              <h2 className="text-2xl pl-3 max-w-xl lg:py-32 text-center text-black font-extrabold tracking-wide shadow-2 sm:text-3xl">
                Join the XD <br /> Community
              </h2>
            </div>
            {/* Second Div */}
            <div className="text-center p-10">
              <p className="text-white font-sm">
                By choosing XD Leather Accessories, you become a part of a
                community that appreciates and values the art of leather
                craftsmanship. Share your experiences, connect with fellow
                enthusiasts, and become a part of a legacy that celebrates the
                enduring beauty of genuine leather.
              </p>
              <p className="mt-5 font-sm">
                Explore our collection today and discover why XD Leather
                Accessories is the preferred choice for those who seek
                exceptional craftsmanship, distinctive design, and a genuine
                connection to the world of fine leather goods.
              </p>
              <div className="mt-10">
                <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                  <div className=""></div>
                  <div className="flex justify-around text-right">
                    <Image src={Instagram} alt="Social" />
                    <Image src={Facebook} alt="Social" />
                    <Image src={Tiktok} alt="Social" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
