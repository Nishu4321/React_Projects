import style from "./Startgame.module.css";

const Startgame = ({ toggle }) => {
  return (
    <div className={`${style.container}`}>
      <div>
        <img src="./images/dices.png" />
      </div>

      <div className={`${style.right_container}`}>
        <h1>Dice Game</h1>
        <button className={`${style.button_1}`} onClick={toggle}>
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Startgame;
