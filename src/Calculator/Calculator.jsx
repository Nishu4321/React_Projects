import { useState } from "react";
import style from "./Calculator.module.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

const Calculator = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    // setText((text) => [...text, val + " "]);
    setText((text) => text + val);
  };

  const calculateResult = () => {
    // const input = text.join("");
    console.log(text);

    console.log(eval(text));
    const res = new Function("return " + text)();
    console.log(res);
    setResult(eval(text));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  return (
    <div className={`${style.app}`}>
      <div className={`${style.calc_wrapper}`}>
        <Input text={text} result={result} />
        <div className={`${style.row}`}>
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className={`${style.row}`}>
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className={`${style.row}`}>
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className={`${style.row}`}>
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="red" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default Calculator;
