import React from "react";
import ContactHeader from "../Sections/ContactHeader/ContactHeader";
import ContactDetails from "../Sections/ContactDetails/ContactDetails";
import Workshop from "../Sections/Workshop/Workshop";
import Faq from "../Sections/Faq/Faq";
import Join from "../Sections/Join/Join";
import Stats from "../Sections/Stats/Stats";
import Connect from "../Sections/Connect/Connect";
import Footer from "../Sections/Footer/Footer";

const Contact = () => {
  return (
    <div className="Contact">
      <ContactHeader />
      <ContactDetails />
      <Workshop />
      <Faq />
      <Join />
      <Connect />
      <Stats />
      <Footer />
    </div>
  );
};

export default Contact;
