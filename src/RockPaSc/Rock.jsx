import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Rock.module.css";

const Rock = () => {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Lets See who Wins");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const handleOnclick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock" ||
        comboMoves === "scissorspaper"
      ) {
        const updateUserPoints = userPoints + 1;
        setUserPoints(updateUserPoints);
        setTurnResult("User got the point");
        if (updateUserPoints == 5) {
          setGameOver(true);
          setResult("User wins");
        }
      }
    }

    if (
      comboMoves === "paperscissors" ||
      comboMoves === "scissorsrock" ||
      comboMoves === "rockpaper"
    ) {
      const updateComputerPoints = computerPoints + 1;
      setComputerPoints(updateComputerPoints);
      setTurnResult("Computer got the point");
      if (updateComputerPoints == 5) {
        setGameOver(true);
        setResult("Computer wins");
      }
    }

    if (
      comboMoves === "paperpaper" ||
      comboMoves === "scissorsscissors" ||
      comboMoves === "rockrock"
    ) {
      setTurnResult("No one got the point");
    }
  }, [userChoice, computerChoice]);

  return (
    <div className={`${styles.main_div}`}>
      <h1 className={`${styles.heading}`}>Rock Papper Scissors</h1>

      <div className={`${styles.score}`}>
        <h1>User Points :{userPoints}</h1>
        <h1>Computer Points:{computerPoints}</h1>
      </div>

      <div className={`${styles.choices}`}>
        <div className={`${styles.choice_user}`}>
          <img
            className={`${styles.user_hand}`}
            src={`./Rock_paper/images/${userChoice}.png`}
            alt=""
          />
        </div>

        <div className={`${styles.choice_computer}`}>
          <img
            className={`${styles.computer_hand}`}
            src={`./Rock_paper/images/${computerChoice}.png`}
            alt=""
          />
        </div>
      </div>

      <div className={`${styles.button_div}`}>
        {choices.map((choice, index) => (
          <button
            className={`${styles.button}`}
            key={index}
            onClick={() => handleOnclick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className={`${styles.result_button}`}>
        <h1>Turn Result:{turnResult}</h1>
        <h1>Final result: {result}</h1>
      </div>

      <div className={`${styles.gameover_button}`}>
        {gameOver && (
          <button
            className={`${styles.restart_button}`}
            onClick={() => reset()}
          >
            {" "}
            Restart
          </button>
        )}
      </div>
    </div>
  );
};

export default Rock;
