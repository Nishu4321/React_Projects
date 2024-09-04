import { useState } from "react";
import style from "./NumberSelect.module.css";
import H1 from "../H1";

const NumberSelect = (props) => {
  const { selectedNum, setSelectedNum } = props;
  console.log(props);

  // const [selectedNum, setSelectedNum] = useState(); // selectedNum useState was used here before moveing to its parent element(GamePlay.jsx).
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const getBackgroundColor = (value) =>
    value === selectedNum ? "black" : "white";
  const getTextcolor = (value) => (value === selectedNum ? "white" : "black");

  return (
    <div>
      <div className={`${style.boxes}`}>
        {arrNumber.map((value, index) => (
          <div
            className={`${style.box}`}
            key={index}
            onClick={() => setSelectedNum(value)}
            style={{
              backgroundColor: getBackgroundColor(value),
              color: getTextcolor(value),
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <H1>Select Number</H1>
    </div>
  );
};

export default NumberSelect;
