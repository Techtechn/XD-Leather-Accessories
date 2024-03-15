import React from "react";
import "./Blog.scss";
import Image from "next/image";
import Tiktok from "../../assets/Tiktok.svg";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import BlogCard from "@/app/Components/BlogCard/BlogCard";

const Blog = () => {
  return (
    <div className="Blog">
      <div className="p-10">
        {/* BLOG BANNER */}
        <div className="blog-card mt-10 border p-10 border-black rounded-xl">
          <div className="flex justify-between">
            <h3 className="text-3xl font-semibold text-[#F7B34A] mb-3">
              Blog.
            </h3>
            <div className="flex justify-around gap-2 text-right">
              <Image src={Instagram} alt="Social" />
              <Image src={Facebook} alt="Social" />
              <Image src={Tiktok} alt="Social" />
            </div>
          </div>
          {/* Details */}
          <div className="">
            <h6 className="text-md text-black font-semibold mb-2">
              Leather Lifestyle
            </h6>
            <p className="text-black">
              Dive into our blog for insights into leather care, style guides,
              and behind-the- <br /> scenes glimpses into our workshop.
            </p>
          </div>
        </div>
        {/* BLOG BANNER */}

        {/* Featured Blog */}
        <div className="mt-20 blog-div">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="text-center max-w-xl lg:py-32">
              <h1 className="text-3xl font-bold text-[#F7B34A]">
                Featured <br /> Blog
              </h1>
            </div>
            <div className="p-5 blog-img">
              <div className="mt-20">
                <h6 className="text-white text-sm mb-1">Featured</h6>
                <h2 className="text-white mb-5">
                  Unveiling The Craft: A Journey Into Leather Making
                </h2>
                <p className="text-white text-sm mb-5">
                  Welcome to the heart of craftsmanship—where tradition meets
                  innovation, and every stitch tells a story. Join us on a
                  captivating journey as we unveil the artistry behind our
                  leather goods at XD Leather Accessories ...
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="">
                <h5 className="text-whites">Crafted With Passion</h5>
                <p className="mt-3 text-sm text-black">
                  Embark on a journey into the heart of craftsmanship with XD
                  Leather Accessories. Our blog is more than just a collection
                  of stories; it`s a portal into the world of leather artistry.
                  Join us as we delve into the intricacies of design, share
                  behind-the-scenes moments from our workshop, and explore the
                  timeless allure of handcrafted leather. Each post is a glimpse
                  into the passion that fuels our creations. Let the adventure
                  begin!
                </p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        {/* Featured Blog */}

        {/* Latest News */}
        <div className="mt-5">
          <div className="">
            <div className="space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              <div className="max-w-xl lg:py-32">
                <h2 className="text-black text-2xl font-bold">
                  Latest <br />
                  News
                </h2>
              </div>
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
        {/* Latest News */}
      </div>
    </div>
  );
};

export default Blog;
