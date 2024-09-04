import style from "./TotalScore.module.css";

const TotalScore = ({ score, attempt }) => {
  return (
    <div className={`${style.divleft}`}>
      <h1>Total score: {score}/1</h1>
      <h4></h4>
      <br />
      <h1>Attempts: {attempt}/10</h1>
    </div>
  );
};

export default TotalScore;
