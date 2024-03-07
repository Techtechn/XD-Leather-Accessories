import Btn from "@/app/Components/Btn/Btn";
import React from "react";
import Image from "next/image";
import CollectionOne from "../../assets/Collection-1.png";
import CollectionTwo from "../../assets/Collection-2.png";
import CollectionThree from "../../assets/Collection-3.png";
import CollectionFour from "../../assets/Collection-4.png";
import QuestionMark from "../../assets/Quotemarks-left.svg";

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <div className="p-3 bg-white">
        <div className="p-10 pb-20 bg-[#102820] rounded-xl">
          <div className="mt-20 text-center">
            <h5 className="text-3xl text-[#F7B34A] font-bold">
              We Are A Product Designer <br /> With A Focus On Leather Products.
            </h5>
            <p className="mt-5 text-sm text-wrap text-white">
              As dedicated product designers specializing in leather, we bring
              creativity and craftsmanship to the forefront. Our focus is on{" "}
              <br />
              curating exceptional leather products that seamlessly blend style
              with functionality. With a commitment to quality and innovation,{" "}
              <br />
              each piece is a testament to our passion for design. Elevate your
              lifestyle with our unique creations. We are more than designers;{" "}
              <br />
              we are artisans shaping experiences through the artistry of
              leather.
            </p>
            <div className="mt-20">
              <Btn text="Our Collections" />
            </div>
          </div>
          {/* About Section */}
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="">
                <h5 className="text-3xl text-white font-bold">About Us</h5>
                <p className="mt-5 text-sm text-white">
                  At <b>XD Leather Accessories</b>, we believe in the beauty of
                  craftsmanship and the enduring allure of genuine leather. Our
                  journey began with a passion for creating products that
                  seamlessly blend tradition and modernity. Each piece is a
                  testament to our commitment to quality, authenticity, and the
                  artistry of leather crafting.
                </p>
              </div>
            </div>
          </div>
          {/* About Section */}

          {/* Mission Section */}
          <div className="mt-20">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className=""></div>
              <div className="">
                <h5 className="text-3xl text-white font-bold">Our Mission</h5>
                <p className="mt-5 text-sm text-white">
                  At <b>XD Leather Accessories</b>, we believe in the beauty of
                  craftsmanship and the enduring allure of genuine leather. Our
                  journey began with a passion for creating products that
                  seamlessly blend tradition and modernity. Each piece is a
                  testament to our commitment to quality, authenticity, and the
                  artistry of leather crafting.
                </p>
              </div>
            </div>
          </div>
          {/* Mission Section */}

          {/* Collection Section */}
          <div className="mt-20">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {/* first div */}
              <div className="">
                <div className="">
                  <h6>
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

export default AboutSection;
