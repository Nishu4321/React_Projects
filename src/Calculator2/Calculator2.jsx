import React from "react";
import styles from "./Calculator2.module.css";
import Button2 from "./components/Button2/Button2";
import InputBox from "./components/Inputbox/InputBox";

const Calculator2 = () => {
  return (
    <div className={`${styles.main_div}`}>
      <div className={`${styles.calculator_div}`}>
        <InputBox />
        <div className={`${styles.row}`}>
          <Button2 symbol="7" />
          <Button2 symbol="8" />
          <Button2 symbol="9" />
          <Button2 symbol="/" color="#f2a33c" />
        </div>
        <div className={`${styles.row}`}>
          <Button2 symbol="4" />
          <Button2 symbol="5" />
          <Button2 symbol="6" />
          <Button2 symbol="*" color="#f2a33c" />
        </div>
        <div className={`${styles.row}`}>
          <Button2 symbol="1" />
          <Button2 symbol="2" />
          <Button2 symbol="3" />
          <Button2 symbol="+" color="#f2a33c" />
        </div>
        <div className={`${styles.row}`}>
          <Button2 symbol="0" />
          <Button2 symbol="." />
          <Button2 symbol="=" />
          <Button2 symbol="-" color="#f2a33c" />
        </div>
        <Button2 symbol="clear" color="#cc5133" />
      </div>
    </div>
  );
};

export default Calculator2;
