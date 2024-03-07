import React from "react";
import "./Join.scss";

const Join = () => {
  return (
    <div className="Join">
      <div className="p-3 bg-white">
        <div className="bg-[#102820] rounded-xl">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* First Div */}
            <div className="text-center p-10 bg-[#E3CBA6] title">
              <h2 className="text-2xl text-black font-extrabold tracking-wide shadow-2 sm:text-3xl">
                Join the XD <br /> Community
              </h2>
            </div>
            {/* Second Div */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
