import React from "react";
import styles from "./InputBox.module.css";

const InputBox = () => {
  return (
    <div className={`${styles.input}`}>
      <div className={`${styles.result}`}>
        <h2>Result</h2>
      </div>
      <div className={`${styles.text}`}>
        <h2>text</h2>
      </div>
    </div>
  );
};

export default InputBox;
