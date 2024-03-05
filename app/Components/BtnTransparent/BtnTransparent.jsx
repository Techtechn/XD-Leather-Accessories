import React from "react";

const BtnTransparent = ({ text }) => {
  return (
    <div className="BtnTransparent">
      {/* #F7B34As */}
      <button
        className="h-10 px-6 font-medium rounded-md bg-transparent border border-white text-black"
        type="submit"
        // style={{ backGroundColor: "#F7B34As" }}
      >
        {text}
      </button>
    </div>
  );
};

export default BtnTransparent;
