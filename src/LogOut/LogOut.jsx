import React from "react";
import styles from "./LogOut.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handelLogOut = () => {
    localStorage.removeItem("loggedin");
    navigate("/Login");
  };

  return (
    <>
      <div className={`${styles.main_div}`}>
        <h2> Do You Want To LogOut...!</h2>
        <button type="button" onClick={handelLogOut}>
          LogOut
        </button>
      </div>
    </>
  );
};

export default LogOut;
