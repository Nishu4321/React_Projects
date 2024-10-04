import React from "react";
import styles from "./Header.module.css";

const Header = ({ name, email, phone }) => (
  <header>
    <div className={`${styles.heading}`}>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <hr></hr>
    </div>
  </header>
);

export default Header;
