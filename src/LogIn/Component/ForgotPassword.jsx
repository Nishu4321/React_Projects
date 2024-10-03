import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleNavigateToReset = () => {
    navigate("/ResetPassword");
  };

  return (
    <div className={`${styles.mainDiv}`}>
      <div className={`${styles.sec_div}`}>
        <h2>Forgot Password</h2>
        <p>If you forgot your password, click the button below to reset it.</p>
        <button onClick={handleNavigateToReset}>Reset Password</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
