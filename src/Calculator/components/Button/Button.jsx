import style from "./Button.module.css";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className={`${style.button_wrapper}`}
    >
      {symbol}
    </div>
  );
};

export default Button;
