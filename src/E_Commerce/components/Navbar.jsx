import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.links}`}>
        <Link to="/E_Commerce">Shop</Link>
        <Link to="/E_Commerce/Cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
