import { useState } from "react";
import style from "./Gameplay.module.css";
import NumberSelect from "../NumberSelect/NumberSelect";
import RoleDice from "../RoleDice/RoleDice";
import TotalScore from "../TotalScore/TotalScore";

const Gameplay = ({ setGameStart }) => {
  const [selectedNum, setSelectedNum] = useState(0); // selectedNum useState was taken from Numberselect.
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [gameOver, setGameover] = useState(false);
  const [win, setWin] = useState(false);

  function reset() {
    setSelectedNum(0);
    setCurrentDice(1);
    setScore(0);
    setAttempt(0);
    setGameover(false);
    setWin(false);
  }

  function checkWin(attempt, score) {
    if (attempt <= 10 && score == 1) {
      setWin(true);
      setGameover(true);
      // alert("Hey, You Won!");
      // reset();
    } else if (attempt >= 10 && score < 1) {
      setGameover(true);
      setWin(false);
      // alert("OH, You Lost!");
      // reset();
    }
  }

  const generateRandomNumber = (min, max) => {
    const r = Math.floor(Math.random() * (max - min) + min);
    // console.log(Math.floor(Math.random() * (max - min) + min))
    console.log(r);
    return r;
  };
  const roleDice = () => {
    if (!(selectedNum == 0)) {
      // if (selectedNum != 0) {
      const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice((prev) => randomNumber);
      const tempAttempt = attempt + 1;
      setAttempt((attempt) => attempt + 1);
      if (selectedNum == randomNumber) {
        const tempScore = score + 1;
        setScore((score) => score + 1);
        checkWin(tempAttempt, tempScore);
      } else {
        checkWin(tempAttempt, score);
      }

      setSelectedNum(0);
    } else {
      alert("Please select number first.");
    }
  };

  return (
    <div>
      <main className={`${style.box1}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
          }}
        >
          <TotalScore score={score} attempt={attempt} />

          {gameOver == true ? (
            <div>{win == true ? <h4>you won</h4> : <h4>you lost</h4>}</div>
          ) : (
            <div>
              <div style={{}}>
                <NumberSelect
                  selectedNum={selectedNum}
                  setSelectedNum={setSelectedNum}
                />
              </div>
              <RoleDice currentDice={currentDice} roleDice={roleDice} />
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "60%",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                width: "100px",
                height: "50px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => reset()}
            >
              Reset
            </button>

            <button
              style={{
                backgroundColor: "green",
                color: "white",
                width: "150px",
                height: "50px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => setGameStart(false)}
            >
              Restart Game
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gameplay;
