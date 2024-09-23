import React from "react";
import styles from "./AnswerReview.module.css";

const AnswerReview = ({ results, selectedAnswers }) => {
  console.log(results);
  console.log(selectedAnswers);
  return (
    <div className={styles.answers}>
      <h3>Your Answers:</h3>
      <ul>
        {results.map((question, index) => (
          <li key={index}>
            <strong>
              {index + 1}. {question.question}
            </strong>
            <br />
            Your Answer: {selectedAnswers[index] || "No answer"}
            <br />
            Correct Answer: {question.correct_answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerReview;
