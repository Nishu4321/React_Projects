import React from "react";
import styles from "./QuizMain.module.css";
import Quiz from "./components/Quiz";

const QuizMain = () => {
  return (
    <>
      <div className={`${styles.MainQuiz}`}>
        <Quiz />
      </div>
    </>
  );
};

export default QuizMain;
