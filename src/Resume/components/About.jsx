import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={`${styles.div_1}`}>
        <h2>About</h2>
        <p>
          Expertise in performing manual testing to ensure the quality and
          reliability of software applications
        </p>
        <p>
          Proficient in writing test plans, test cases, and test scenarios to
          effectively identify and report software defects.
        </p>
        <p>
          Skilled in executing functional, regression, performance, and
          usability tests to assess the software's compliance with business
          requirements and user expectations.
        </p>
        <hr></hr>
      </div>
    </>
  );
};

export default About;
