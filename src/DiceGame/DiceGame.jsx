import Startgame from "./components/Startgame/Startgame";
import style from "./App.module.css";
import { useState } from "react";
import Gameplay from "./components/Gameplay/Gameplay";

function DiceGame() {
  const [isGameStarted, setGameStart] = useState(false);

  const gameplay = () => {
    setGameStart((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? (
        <Gameplay setGameStart={setGameStart} />
      ) : (
        <Startgame toggle={gameplay} />
      )}
    </div>
  );
}

export default DiceGame;
