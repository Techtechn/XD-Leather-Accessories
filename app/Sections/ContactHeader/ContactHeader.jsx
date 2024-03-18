import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./ContactHeader.scss";
import Image from "next/image";
import Img from "../../assets/ShopHeaderImg.png";
import Btn from "@/app/Components/Btn/Btn";

// #f2f7f8 bg
// #3d4f60 text
const ContactHeader = () => {
  return (
    <div
      className="ContactHeader"
      // style={{ backgroundColor: "#F0F0F0", color: "#3d4f60" }}
    >
      <Nav />
      <div className="lg:px-6">
        <div className="flex justify-center text-center">
          <div className="mt-5 max-w-xl lg:py-32 text-center">
            <h6 className="text-sm text-[#FF9B00]">We Design, We Create.</h6>
            <h1
              className="text-4xl mt-2 text-white font-extrabold sm:text-4xl"
              style={{ fontSize: "55px" }}
            >
              Contact Us
            </h1>
            <p className="mt-5 text-white text-lg">
              At XD Leather Accessories, we invite you to embrace the richness
              of leather craftsmanship. Each product tells a story, a story of
              tradition, innovation, and enduring style. Join us on this journey
              and elevate your everyday with our handcrafted leather goods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
