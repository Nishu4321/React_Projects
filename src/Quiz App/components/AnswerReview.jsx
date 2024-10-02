import React from "react";
import styles from "./AnswerReview.module.css";

const AnswerReview = ({
  results,
  selectedAnswers,
  currentQuestionIndex,
  currentQuestion,
  setCurrentQuestionIndex,
  handleNextQuestion,
  setLock,
}) => {
  // const optionRefs = useRef([]);
  console.log(results);
  console.log(selectedAnswers);

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setLock(false);
    }
  };
  return (
    <div className={`${styles.content}`}>
      <h3>
        {currentQuestionIndex + 1}.{currentQuestion.question}
      </h3>
      <ul>
        {[
          ...currentQuestion.incorrect_answers,
          currentQuestion.correct_answer,
        ].map((option, index) => {
          const isSelected = selectedAnswers[currentQuestionIndex] === option;
          const isCorrect = currentQuestion.correct_answer === option;
          const isWrong = isSelected && !isCorrect;
          return (
            <li
              key={index}
              onClick={(e) => checkAns(e, option)}
              className={`${
                isCorrect ? styles.correct : isWrong ? styles.wrong : ""
              } ${isSelected ? styles.selected : ""}`}
            >
              {option}
            </li>
          );
        })}
      </ul>
      <div className={`${styles.buttons}`}>
        <button onClick={handlePrevQuestion}>Prev</button>
        <button
          onClick={handleNextQuestion}
          disabled={!selectedAnswers[currentQuestionIndex]}
        >
          Next
        </button>
      </div>
      <div className={`${styles.index}`}>
        {currentQuestionIndex + 1} of {results.length} Questions
      </div>
    </div>
    // <div className={styles.answers}>
    //   <h3>Your Answers:</h3>
    //   <ul>
    //     {results.map((question, index) => (
    //       <li key={index}>
    //         <strong>
    //           {index + 1}. {question.question}
    //         </strong>
    //         <br />
    //         Your Answer: {selectedAnswers[index] || "No answer"}
    //         <br />
    //         Correct Answer: {question.correct_answer}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default AnswerReview;
