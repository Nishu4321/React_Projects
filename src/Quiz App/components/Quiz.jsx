import React, { useRef, useState } from "react";
import styles from "./Quiz.module.css";
import { data } from "../data";
import AnswerReview from "./AnswerReview";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { results } = data;
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const optionRefs = useRef([]);
  const [result, setResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(results.length).fill(null)
  );
  const [viewAnswers, setViewAnswers] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < results.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setLock(false);
    } else {
      setResult(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setLock(false);
    }
  };
  const currentQuestion = results[currentQuestionIndex];

  const checkAns = (e, answer) => {
    if (lock === false) {
      const previousAnswer = selectedAnswers[currentQuestionIndex];
      if (previousAnswer === answer) {
        return;
      }
      setSelectedAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[currentQuestionIndex] = answer;
        return newAnswers;
      });

      e.target.classList.add(
        currentQuestion.correct_answer === answer
          ? styles.correct
          : styles.wrong
      );

      if (currentQuestion.correct_answer === answer) {
        setScore(
          (prev) =>
            prev + (previousAnswer === currentQuestion.correct_answer ? 0 : 1)
        );
      } else {
        setScore(
          (prev) =>
            prev - (previousAnswer === currentQuestion.correct_answer ? 1 : 0)
        );
      }
    }
  };
  console.log(score);

  const reset = () => {
    setCurrentQuestionIndex(0);
    setResult(false);
    setLock(false);
    setScore(0);
    setSelectedAnswers(Array(results.length).fill(null));
    optionRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.remove(styles.correct, styles.wrong);
      }
    });
    setViewAnswers(false);
  };

  const toggleViewAnswer = () => {
    setViewAnswers((prev) => !prev);
  };
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.heading}`}>
          <h2>Quiz App</h2>
        </div>
        {result ? (
          <>
            <h2>
              You Scored: {score} out of {results.length}
            </h2>
            <div className={`${styles.button_div}`}>
              <button className={`${styles.button_reset}`} onClick={reset}>
                Reset
              </button>
              <button
                className={`${styles.button_viewAnswers}`}
                onClick={toggleViewAnswer}
              >
                {viewAnswers ? "Hide Answer" : "View Answer"}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.content}`}>
              <h3>
                {currentQuestionIndex + 1}.{currentQuestion.question}
              </h3>
              <ul>
                {[
                  ...currentQuestion.incorrect_answers,
                  currentQuestion.correct_answer,
                ].map((option, index) => {
                  const isSelected =
                    selectedAnswers[currentQuestionIndex] === option;
                  const isCorrect = currentQuestion.correct_answer === option;
                  return (
                    <li
                      key={index}
                      ref={(el) => (optionRefs.current[index] = el)}
                      onClick={(e) => checkAns(e, option)}
                      className={`${
                        isSelected
                          ? isCorrect
                            ? styles.correct
                            : styles.wrong
                          : ""
                      }`}
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
            </div>
            <div className={`${styles.index}`}>
              {currentQuestionIndex + 1} of {results.length} Questions
            </div>
          </>
        )}

        {viewAnswers ? (
          <AnswerReview
            results={results}
            selectedAnswers={selectedAnswers}
            currentQuestionIndex={currentQuestionIndex}
            currentQuestion={currentQuestion}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            handleNextQuestion={handleNextQuestion}
            setLock={setLock}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Quiz;
