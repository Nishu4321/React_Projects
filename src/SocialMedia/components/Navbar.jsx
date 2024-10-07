import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Home from "./Home";
import CreatePost from "./CreatePost";

const Navbar = () => {
  return (
    <div>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.links}`}>
          <Link to="/SocialMedia"> Home</Link>
          <Link to="/SocialMedia/CreatePost"> Create Post</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
