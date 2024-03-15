import React from "react";
import "./Footer.scss";
import Image from "next/image";
import Logo from "../../assets/XD-logo.png";
import Link from "next/link";
import Bank from "../../assets/bank.svg";
import Paypal from "../../assets/paypal.svg";
import Visa from "../../assets/visa.svg";
import Master from "../../assets/mastercard.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="p-5">
        <div className="bg-white">
          <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {/* Logo */}
            <div className="Logo text-center">
              <Image className="w-32" src={Logo} alt="Logo" />
            </div>
            {/* Menu */}
            <div className="Menu max-w-xl lg:py-16">
              <div className="flex justify-around text-center">
                <Link className="text-black text-semibold" href="/">
                  About
                </Link>
                <Link className="text-black text-semibold" href="/">
                  Shop
                </Link>
                <Link className="text-black text-semibold" href="/">
                  Blog
                </Link>
                <Link className="text-black text-semibold" href="/">
                  Contact
                </Link>
              </div>
            </div>
            {/* Icons */}
            <div className="Icons max-w-xl lg:py-16">
              <div className="flex justify-around text-center">
                <Image className="" src={Bank} alt="Logo" />
                <Image className="" src={Master} alt="Logo" />
                <Image className="" src={Visa} alt="Logo" />
                <Image className="" src={Paypal} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copy Right Section */}
      <div className="Copyright">
        <div className="p-5 bg-[#E9E9E9]">
          <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <h6 className="text-sm text-black">
                Designed by Outcloud © 2023/2024 | Copyright XD Leather
                Accessories | All rights reserved.
              </h6>
            </div>
            <div className="text-center">
              <p
                className="text-sm text-black font-thin
              "
              >
                Terms & Conditions
              </p>
            </div>
            <div className="text-right">
              <h1 className="text-bold text-xl text-black">OTC.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
