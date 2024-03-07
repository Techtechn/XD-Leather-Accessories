import Btn from "@/app/Components/Btn/Btn";
import React from "react";
import Image from "next/image";
import ImgOne from "../../assets/Img-3.png";
import ImgTwo from "../../assets/Img-2.png";

const WhyUs = () => {
  return (
    <div className="WhyUs bg-white text-black">
      <div className="p-10 pb-10">
        <div className="">
          <h1 className="text-2xl text-black font-extrabold tracking-wide shadow-2 sm:text-3xl">
            Why Choose <br /> Us!
          </h1>
        </div>
        {/*  */}
        <div className="">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* First Div */}
            <div className=""></div>
            {/* Second Div */}
            <div className="">
              <p className="text-black text-sm">
                Choose <b>XD Leather Accessories</b> for unparalleled
                craftsmanship, distinctive designs, and premium, ethically
                sourced materials. Our commitment to customization, durability,
                and customer satisfaction sets us apart.
              </p>
              <p className="text-black text-sm mt-5">
                Join a community that values authenticity, and celebrate the
                enduring beauty of genuine leather with us. Elevate your style;
                choose <b>XD Leather Accessories</b>
              </p>
              <div className="mt-5 text-center">
                <Btn text="Shope" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/* Why us List  */}
        <div className="">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* First Div */}
            <div className="">
              <div className="">
                <h1 className="ml-5">
                  <span className="p-5 mr-3 rounded-full text-black bg-[#34D000]">
                    01
                  </span>{" "}
                  <span className="font-semibold">
                    Unparalleled Craftsmanship
                  </span>
                </h1>
                <p className="mt-10 text-sm font-light">
                  At XD Leather Accessories, we take pride in the artistry and
                  precision that goes into every piece of leather we craft. Our
                  skilled artisans bring decades of experience, ensuring each
                  product is a testament to the timeless tradition of leather
                  craftsmanship. From the initial design concept to the final
                  stitch, we guarantee unparalleled quality and attention to
                  detail.
                </p>
              </div>
              {/*  */}
              <div className="mt-10">
                <h1 className="ml-5">
                  <span className="p-5 mr-3 rounded-full text-black bg-[#34D000]">
                    02
                  </span>{" "}
                  <span className="font-semibold">Distinctive Design</span>
                </h1>
                <p className="mt-10 text-sm font-light">
                  Discover leather goods that stand out in both style and
                  substance. Our commitment to innovation is reflected in each
                  unique design, blending classic elegance with contemporary
                  flair. Whether you`re drawn to modern minimalism or timeless
                  classics, our collection offers a diverse range of styles to
                  suit every taste.
                </p>
              </div>
              {/*  */}
              <div className="mt-10">
                <h1 className="ml-5">
                  <span className="p-5 mr-3 rounded-full text-black bg-[#34D000]">
                    03
                  </span>{" "}
                  <span className="font-semibold">
                    Premium Materials, Ethical Practices
                  </span>
                </h1>
                <p className="mt-10 text-sm font-light">
                  We source only the finest, ethically and sustainably produced
                  leather. Our dedication to responsible sourcing ensures that
                  every material used in our products meets the highest
                  standards of quality and environmental consciousness. Feel
                  confident in your choice, knowing that our commitment to
                  ethical practices extends across every aspect of our business.
                </p>
              </div>
              {/*  */}
              <div className="mt-10">
                <h1 className="ml-5">
                  <span className="p-5  mr-3 rounded-full text-black bg-[#34D000]">
                    04
                  </span>{" "}
                  <span className="font-semibold">Transparency and Trust</span>
                </h1>
                <p className="mt-10 text-sm font-light">
                  We believe in openness and honesty. From the sourcing of
                  materials to the crafting process, we maintain transparency in
                  every aspect of our business. Our commitment to building trust
                  with our customers is unwavering, and we invite you to
                  experience the authenticity that defines XD Leather
                  Accessories.
                </p>
              </div>
              {/*  */}
            </div>
            {/* Second Div */}
            <div className="">
              <div className="mt-10">
                <Image src={ImgOne} alt="Why Us" />
                <div className="mt-10">
                  <h1 className="ml-5">
                    <span className="p-5 mr-3 rounded-full text-black bg-[#34D000]">
                      05
                    </span>{" "}
                    <span className="font-semibold">
                      Customization Tailored to You
                    </span>
                  </h1>
                  <p className="mt-10 text-sm font-light">
                    Your style is personal, and we believe your leather goods
                    should be too. Our customization options allow you to create
                    a piece that truly reflects your individuality. From
                    personalized monograms to selecting the perfect color and
                    finish, we empower you to make each item uniquely yours.
                  </p>
                </div>
                {/*  */}
                <div className="mt-10">
                  <h1 className="ml-5">
                    <span className="p-5  mr-3 rounded-full text-black bg-[#34D000]">
                      06
                    </span>{" "}
                    <span className="font-semibold">Unmatched Durability</span>
                  </h1>
                  <p className="mt-10 text-sm font-light">
                    Investing in a leather product from XD Leather Accessories
                    means investing in durability. We meticulously select and
                    treat our leather to ensure longevity and resilience. Our
                    products are built to withstand the test of time, evolving
                    with character and grace as they accompany you on life`s
                    journeys
                  </p>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="mt-10">
                <Image src={ImgTwo} alt="Why Us" />
              </div>
              <div className="">
                <div className="mt-10">
                  <h1 className="ml-5">
                    <span className="p-5  mr-3 rounded-full text-black bg-[#34D000]">
                      07
                    </span>{" "}
                    <span className="font-semibold">
                      Customer-Centric Approach
                    </span>
                  </h1>
                  <p className="mt-10 text-sm font-light">
                    Your satisfaction is our priority. We are dedicated to
                    providing an exceptional customer experience at every
                    touchpoint. From the moment you explore our collection to
                    the arrival of your carefully packaged purchase, we strive
                    to exceed your expectations. Our responsive customer support
                    team is always ready to assist you on your XD Leather
                    Accessories journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default WhyUs;
