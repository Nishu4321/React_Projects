import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";
const Button = (props) => {
  const { isOutline, icon, text, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${isOutline ? styles.outline_btn : styles.primary_btn}`}
    >
      <MdMessage />
      {icon}
      {text}
    </button>
  );
};

export default Button;
