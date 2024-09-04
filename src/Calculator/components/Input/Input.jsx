import style from "./Input.module.css";

const Input = ({ text, result }) => {
  return (
    <div className={`${style.input_wrapper}`}>
      <div className={`${style.result}`}>
        <h1>r {result}</h1>
      </div>

      <div className={`${style.text}`}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
