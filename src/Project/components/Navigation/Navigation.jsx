import React from "react";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={`${style.div1}`}>
      <nav className={`${style.container}`}>
        <div className={`${style.logo}`}>
          <img src="/Project/images/brand_logo.png" alt="logo" />
        </div>
        <ul className={`${style.list}`}>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button className={`${style.btn}`}>login</button>
      </nav>
    </div>
  );
};

export default Navigation;
