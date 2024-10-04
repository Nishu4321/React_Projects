import React from "react";
import styles from "./Experience.module.css";

const Experience = ({ jobs }) => {
  <div className={`${styles.div_1}`}>
    <section className={`${styles.div_1}`}>
      <h2>Experience</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <h3>
            {job.title} at {job.company}
          </h3>
          <p>{job.date}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  </div>;
};

export default Experience;
