import React, { useRef, useState, useEffect } from "react";
import styles from "./Quiz.module.css";
// import { data } from "../data";
import axios from "axios";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  //   const { results } = data;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const optionRefs = useRef([]);
  const [result, setResult] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&category=11"
        );
        setQuestions(response.data.results);
      } catch (err) {
        setError("Failed to fetch questions.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);
  console.log(questions);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      //&& lock === true

      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setLock(false);
      optionRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.remove(styles.correct, styles.wrong);
        }
      });
    } else {
      setResult(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setLock(false); // extra
    }
  };

  const checkAns = (e, answer) => {
    // optionRefs.current.forEach((ref) => {
    //   if (ref) {
    //     ref.classList.remove(styles.correct, styles.wrong);
    //   }
    // });
    if (!lock) {
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion.correct_answer === answer) {
        e.target.classList.add(styles.correct);
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add(styles.wrong);
        setLock(true);

        const correctIndex = [
          ...currentQuestion.incorrect_answers,
          currentQuestion.correct_answer,
        ].indexOf(currentQuestion.correct_answer);
        if (optionRefs.current[correctIndex]) {
          optionRefs.current[correctIndex].classList.add(styles.correct);
        }
      }
    }
  };
  console.log(score);

  const reset = () => {
    setCurrentQuestionIndex(0);
    setResult(false);
    setLock(false);
    setScore(0);
    optionRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.remove(styles.correct, styles.wrong);
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const currentQuestion = questions[currentQuestionIndex];

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
            <button className={`${styles.button_reset}`} onClick={reset}>
              Reset
            </button>
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
                ].map((option, index) => (
                  <li
                    key={index}
                    ref={(el) => (optionRefs.current[index] = el)}
                    onClick={(e) => checkAns(e, option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
              <div className={`${styles.buttons}`}>
                <button onClick={handlePrevQuestion}>Prev</button>
                <button onClick={handleNextQuestion}>Next</button>
              </div>
            </div>

            <div className={`${styles.index}`}>
              {currentQuestionIndex + 1} of {questions.length} Questions
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
