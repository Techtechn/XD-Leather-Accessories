import React from "react";
import "./ContactDetails.scss";
import Btn from "@/app/Components/Btn/Btn";

const ContactDetails = () => {
  return (
    <div className="ContactDetails">
      <div className="bg-white p-5">
        <div className="m-2 p-10 pt-10 bg-[#F0F0F0] rounded-lg">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <h6 className="text-sm text-[#FF9B00]">Contact Us</h6>
              <h1
                className="text-[#4D2D18] font-extrabold"
                style={{ fontSize: "45px" }}
              >
                Get In Touch
              </h1>
              <p className="mt-5 text-black text-sm">
                Feel free to connect with us! Whether you have inquiries,
                feedback, or just want to say hello, we`d love to hear from you.
                Reach out through email at email@email.com, give us a call at
                076-243-6712, or connect on social media @xdleatheraccessories.
                Your thoughts are important to us, and we look forward to
                assisting you. Let`s stay in touch!
              </p>
            </div>
            <div className="">
              <div className="bg-white p-5 shadow-lg rounded-lg">
                <div className="mt-5 text-left">
                  <h3 className="text-[#FF9B00] font-semibold">CONTACT FORM</h3>
                </div>
                <div className="mt-5 text-left">
                  <form>
                    <input
                      type="text"
                      className="w-full p-3 mt-3 bg-[#f0f0f0] text-black rounded-lg outline-none"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="w-full p-3 mt-3 bg-[#f0f0f0] text-black rounded-lg outline-none"
                      placeholder="Phone"
                    />
                    <input
                      type="text"
                      className="w-full p-3 mt-3 bg-[#f0f0f0] text-black rounded-lg outline-none"
                      placeholder="Email"
                    />
                    <textarea
                      className="mt-3 p-3 bg-[#f0f0f0] text-black w-full rounded-lg outline-none"
                      cols="20"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                    <div className="mt-5 text-center">
                      <Btn text="Send" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="mt-5 text-center">
            <div className="p-3 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="bg-white m-5 text-center rounded-xl p-5">
                <h5 className="text-black font-semibold">ADDRESS</h5>
                <p className="text-black text-sm">
                  18 Van Beek street, Doornfontein Johannesburg, 2094
                </p>
              </div>
              <div className="bg-white m-5 text-center rounded-xl p-5">
                <h5 className="text-black font-semibold">PHONE</h5>
                <p className="text-black text-sm">076-243-6712</p>
              </div>
              <div className="bg-white m-5 text-center rounded-xl p-5">
                <h5 className="text-black font-semibold">EMAIL</h5>
                <p className="text-black text-sm">xolelwamilisa@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
