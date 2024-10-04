import React from "react";
import styles from "./Education.module.css";

const Education = ({ schools }) => (
  <section className={`${styles.div_1}`}>
    <h2>Education</h2>
    {schools.map((school, index) => (
      <div key={index}>
        <h3>
          {school.degree} in {school.field}
        </h3>
        <p>
          {school.institution} ({school.year})
        </p>
        <p>{school.CGPA}</p>
        <hr></hr>
      </div>
    ))}
  </section>
);

export default Education;
