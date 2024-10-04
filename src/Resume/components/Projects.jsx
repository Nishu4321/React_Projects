import React from "react";
import styles from "./Projects.module.css";
const Projects = ({ projects }) => (
  <section className={`${styles.div_1}`}>
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <div key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    ))}
  </section>
);

export default Projects;
