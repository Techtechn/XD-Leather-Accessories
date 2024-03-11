import React from "react";
import Image from "next/image";
import Line from "../../assets/Line.svg";
import Quotes from "../../assets/Quotemarks-left.svg";
import CollectionOne from "../../assets/Collection-1.png";
import CollectionTwo from "../../assets/Collection-2.png";
import CollectionThree from "../../assets/Collection-3.png";
import CollectionFour from "../../assets/Collection-4.png";
import QuestionMark from "../../assets/Quotemarks-left.svg";
import TestimonialCard from "@/app/Components/TestimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="p-3 bg-white">
        <div className="bg-[#102820] rounded-xl p-5">
          <div className="text-center pt-10">
            <h6 className="text-white text-sm">Testimonial</h6>
            <h2 className="text-4xl font-bold mt-3 text-[#F7B34A]">
              What Our Community <br /> Has To Say About Us
            </h2>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Image className="text-center" src={Line} alt="Line" />
          </div>
          <div className="mt-5 pt-5 pb-5">
            <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <TestimonialCard />
              <div
                className="border border-white rounded-xl p-5 text-center bg-transparent"
                style={{ transform: "scale(1.1)" }}
              >
                <p className="text-white text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere porro illo quae non vero perferendis est animi iste.
                  Nobis, placeat. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Omnis, veritatis.
                </p>
                <h6 className="mt-3 text-[#F7B34A]">~ Njabulo Nkosi</h6>
                <div className="flex justify-center items-center">
                  <Image className="w-16" src={Quotes} alt="Quotes" />
                </div>
              </div>
              <TestimonialCard />
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Image className="text-center" src={Line} alt="Line" />
          </div>
          {/* TEXT */}
          <div className="text text-center mt-5">
            <p className="text-sm text-white text-wrap">
              Our community cherishes XD Leather Accessories for crafting more
              than just leather products—it`s about curated experiences. <br />{" "}
              From personalized accessories to timeless staples, the shared
              sentiment is one of admiration for the meticulous craftsmanship{" "}
              <br />
              and genuine connection to authenticity. Each purchase is not just
              an item; it`s a story woven into the fabric of a thriving <br />
              community. Join us and discover why XD Leather Accessories is more
              than a brand; it`s a shared passion for elevated living.
            </p>
          </div>
          {/* Text */}

          {/* Collection Section */}
          <div className="mt-20">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {/* first div */}
              <div className="">
                <div className="">
                  <h6 className="text-white">
                    Our{" "}
                    <span className="text-[#F7B34A] font-bold">
                      Collections
                    </span>
                    <span className="pl-5" aria-hidden="true">
                      &rarr;
                    </span>
                  </h6>
                </div>
                {/* Img */}

                <div className="pt-5 pb-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                    <div className="mb-3 pr-3">
                      <Image
                        src={CollectionOne}
                        alt="IMG"
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="mb-3 pr-3">
                      <Image
                        src={CollectionTwo}
                        alt="IMG"
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="mb-0 pr-3">
                      <Image
                        src={CollectionThree}
                        alt="IMG"
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="mb-0 pr-3">
                      <Image
                        src={CollectionFour}
                        alt="IMG"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Second div */}
              <div className="pl-3 max-w-xl lg:py-32 text-center">
                <h2 className="text-4xl font-bold text-[#F7B34A] flex justify-around">
                  {" "}
                  Handcrafted <br /> Excellence in <br /> Leather
                </h2>
                <p>
                  <Image src={QuestionMark} alt="Question Mark" />
                </p>
              </div>
            </div>
          </div>
          {/* Collection Section */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
