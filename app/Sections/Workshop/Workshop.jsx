import Btn from "@/app/Components/Btn/Btn";
import React from "react";
import "./Workshop.scss";

const Workshop = () => {
  return (
    <div className="Workshop">
      <div className="p-10">
        <div className="p-2 mt-5 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <h2 className="text-black text-3xl">Visit Our Workshop</h2>
            <p className="text-black mt-5 text-sm">
              Embark on a journey into the heart of craftsmanship by visiting
              our workshop. Witness the artistry and precision that goes into
              creating each masterpiece. Immerse yourself in the world of fine
              leather crafting and experience the passion behind XD Leather
              Accessories.
              <br /> <br />
              Contact us to schedule a visit and be a part of the artistry. We
              look forward to welcoming you to our workshop.
            </p>
            <div className="mt-5">
              <Btn text="Get Directions" />
            </div>
          </div>
          <div className="">
            <div className="bg-[#4C6444] text-white p-5 pt-5 pb-5 text-center rounded-3xl">
              <div className="p-5 mt-5 m-10 rounded-full bg-[#FF9B00]">
                <h1>TRADING HOURS</h1>
              </div>
              <div className="">
                <p>
                  <span className="font-bold text-xl">Monday - Friday</span>{" "}
                  <br /> <span>08:30 AM - 17:00 PM</span>
                </p>
                <p className="mt-10">
                  <span className="font-bold text-xl">Saturday</span> <br /> 08:
                  30 AM - 12:30 PM
                </p>
                <p className="mt-10">
                  <span className="font-bold text-xl">Sunday</span> <br />{" "}
                  Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
