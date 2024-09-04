import React from "react";
import style from "./ContactUsNavigation.module.css";

const ContactUsNavigation = () => {
  return (
    <nav className={`${style.navigation}`}>
      <div className={`${style.logo}`}>
        <img
          src="/public/ContactUs/images/logo.png"
          alt="do some coding logo"
        />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default ContactUsNavigation;
