import React from "react";
import styles from "./Skills.module.css";

const Skills = ({ skills }) => (
  <section className={`${styles.div_1}`}>
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <hr></hr>
  </section>
);

export default Skills;
