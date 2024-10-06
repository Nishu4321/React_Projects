import React, { useState } from "react";
import styles from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handelIncrementClick() {
    dispatch(increment());
  }

  function handelDecrementClick() {
    dispatch(decrement());
  }

  function handelResetClick() {
    dispatch(reset());
  }
  function handelNumberClick() {
    dispatch(incrementByAmount(number));
  }

  return (
    <div className={`${styles.counter}`}>
      <button onClick={handelIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handelDecrementClick}>-</button>
      <button onClick={handelResetClick}>Reset</button>
      <input
        type="Number"
        placeholder="enter any number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handelNumberClick}> Inc By Number</button>
    </div>
  );
};

export default Counter;
