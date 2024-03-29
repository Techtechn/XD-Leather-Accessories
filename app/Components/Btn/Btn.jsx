import React from "react";

const Btn = ({ text }) => {
  return (
    <div className="Btn">
      {/* #F7B34As */}
      <button
        className="h-10 px-6 font-medium rounded-md bg-[#F7B34A]  text-black"
        type="submit"
        // style={{ backGroundColor: "#F7B34As" }}
      >
        {text}
      </button>
    </div>
  );
};

export default Btn;
