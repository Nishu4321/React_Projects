import { useState } from "react";
import style from "./RoleDice.module.css";
import H1 from "../H1";

const RoleDice = (props) => {
  const { currentDice, roleDice } = props;
  //  const [currentDice, setCurrentDice] = useState(1);

  return (
    <div className={`${style.div_1}`}>
      {props.children}
      <div className={`${style.img_dice}`} onClick={roleDice}>
        <img src={`./images/dice/dice_${currentDice}.png`} alt="dice-1" />
      </div>
      <H1>Click on Dice To Roll</H1>
    </div>
  );
};

export default RoleDice;
