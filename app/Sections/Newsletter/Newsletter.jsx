import React from "react";
import Image from "next/image";
import Img from "../../assets/newsletter-img.png";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <div className="bg-[#102820] text-white">
        <div className="p-10">
          <div className="p-3 mt-10 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="max-w-xl lg:py-16">
              <h1 className="text-3xl text-white font-extrabold">
                We Make <br />
                Everything Look <br />
                As Good As You want
              </h1>
              <p className="mt-5">
                At XD Leather Accessories, we transform your style aspirations
                into reality. Our commitment is simple: to make everything look
                as good as you want. From timeless classics to contemporary
                statements, our products embody unparalleled craftsmanship and
                refined aesthetics. Elevate your style with XD Leather
                Accessories—where every detail is meticulously crafted to
                enhance your unique elegance.
              </p>
            </div>
            <div className="">
              <Image className="w-88" src={Img} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
