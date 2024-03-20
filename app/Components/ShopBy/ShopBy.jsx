import React from "react";
import Image from "next/image";
import ImgOne from "../../assets/shop-img-1.png";
import ImgTwo from "../../assets/shop-img-2.png";
import ImgThree from "../../assets/shop-img-3.png";
import ImgFour from "../../assets/shop-img-4.png";

const callouts = [
  {
    name: "Leather Bag",
    description: "R1099.99",
    imageSrc: ImgOne,
    imageAlt: ImgOne,
    href: "#",
  },
  {
    name: "Leather Bag",
    description: "R1099.99",
    imageSrc: ImgTwo,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Leather Bag",
    description: "R1099.99",
    imageSrc: ImgThree,
    imageAlt:
      "Collection of four insulated Leather Bag bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Leather Bag",
    description: "R1099.99",
    imageSrc: ImgFour,
    imageAlt:
      "Collection of four insulated Leather Bag bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Leather Bag",
    description: "R1099.99",
    imageSrc: ImgOne,
    imageAlt:
      "Collection of four insulated Leather Bag bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Leather Bag",
    description: "R1099.99",
    imageSrc: ImgTwo,
    imageAlt:
      "Collection of four insulated Leather Bag bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Leather Bag",
    description: "R1099.99",
    imageSrc: ImgThree,
    imageAlt:
      "Collection of four insulated Leather Bag bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Leather Bag",
    description: "R1099.99",
    imageSrc: ImgFour,
    imageAlt:
      "Collection of four insulated Leather Bag bottles on wooden shelf.",
    href: "#",
  },
];

export default function ShopBy() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-2">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          {/* <h2 className="text-2xl font-bold text-gray-900">Collections</h2> */}

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative mt-5 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-xl font-bold text-[#F7B34A]">
                  {callout.description}
                </p>
                <button className="p-3 mt-5 bg-[#102820] w-[190] h-[619] text-white rounded-xl">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
