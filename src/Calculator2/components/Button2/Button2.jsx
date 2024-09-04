import React from "react";
import styles from "./Button2.module.css";

const Button2 = ({ symbol, color }) => {
  return (
    <div className={`${styles.btn}`} style={{ backgroundColor: color }}>
      {symbol}
    </div>
  );
};

export default Button2;
