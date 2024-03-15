import React from "react";
import Image from "next/image";
import NewsOne from "../../assets/news-1.png";
import NewsTwo from "../../assets/news-2.png";
import NewsThree from "../../assets/news-3.png";
import Logo from "../../assets/XD-logo-block.png";

const BlogCard = () => {
  return (
    <div className="BlogCard">
      <div className="">
        <Image src={NewsOne} alt="News Image" />
      </div>
      <div className="mt-3">
        <h6 className="text-sm font-normal text-black">Latest News</h6>
        <h2 className="text-black text-2xl mt-3">
          The Care and Maintenance of Your Leather Companion
        </h2>
        <p className="text-sm mt-3 text-black">
          Leather is more than just a material; it`s a timeless companion that
          ages with character. To ensure your leather goods stand the test of
          time, proper care is paramount. In this guide, we explore the art of
          maintaining and cherishing your leather companion for a lifetime of
          enduring elegance...
        </p>
      </div>
      <div className="mt-5 flex justify-around">
        <Image className="w-16" src={Logo} alt="Logo" />
        <div className="">
          <h4 className="text-black font-bold">XD Leather Accessories</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
