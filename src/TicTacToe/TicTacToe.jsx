import React, { useState } from "react";

import style from "./style.module.css";

function TicTacToe() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [turn, SetTurn] = useState("X");
  const [winner, SetWinner] = useState("");
  const [gameover, setGameover] = useState(false);

  const checkWin = (tempBoxes) => {
    let boxes = [...tempBoxes];
    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    win.forEach((e) => {
      //boxes[e[0]]
      if (
        boxes[e[0]] === boxes[e[1]] &&
        boxes[e[2]] === boxes[e[1]] &&
        boxes[e[0]] !== ""
      ) {
        SetWinner(boxes[e[0]] + " " + "Won");
        setGameover(true);
      }
    });
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <nav className={`${style.heading}`}>
        <ul>
          <li>MyTicTacToe.com</li>
        </ul>
      </nav>
      <div className={`${style.gameContainer}`}>
        {/* <div className="line"></div> */}
        <div className={`${style.container}`}>
          {boxes.map((v, i) => (
            <div
              className={`${style.box}`}
              onClick={() => {
                if (boxes[i] == "" && !gameover) {
                  let tempBoxes = [...boxes];
                  tempBoxes[i] = turn;
                  const t = turn == "X" ? "0" : "X";
                  setBoxes(tempBoxes);
                  SetTurn(t);
                  checkWin(tempBoxes);
                }
              }}
            >
              <span className={`${style.boxtext}`}>{v}</span>
            </div>
          ))}
        </div>

        <div className={`${style.gameInfo}`}>
          <h1>Welcome to Tic Tac Toe</h1>
          <h2>Winner is - {winner}</h2>
          <div>
            <span className={`${style.info}`}>Turn for {turn}</span>
            <button
              className={`${style.reset}`}
              onClick={() => {
                setBoxes(Array(9).fill(""));
                setGameover(false);
              }}
            >
              Reset Game
            </button>
          </div>

          {/* <div className="imgbox">
            <img src="excited.gif" alt="happay toy" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
