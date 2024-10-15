import React from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import styles from "./Resume.module.css"; // Make sure to create this file as well!

const Resume = () => {
  const resumeData = {
    name: "Nishanth B",
    email: "nishu4321@gmail.com",
    phone: "+91 9976512045",
    experience: [
      {
        title: "Traninee",
        company: "HAILABS",
        date: "July 2023 - June 2023",
        description: `Standardized Test Plan, Test Scripts/Test Cases, Daily Status
                      Reports, etc., documents leading to a 20% increase in productivity.`,
      },
      {
        title: "Testing",
        company: `U-TEST`,
        date: "july 2023",
        description: `U-test academy Basics`,
      },
    ],
    education: [
      {
        degree: "B.Tech",
        field: "Computer Science and Engineering",
        institution: `JSS Science and Technology University`,
        year: "2018-2022",
        CGPA: "7.53 CGPA",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "CSS", "HTML", "Debugging"],
    projects: [
      {
        title: "Portfolio Website",
        description: "A personal website to showcase my projects.",
        link: "https://myportfolio.com",
      },
      {
        title: "Task Manager App",
        description: "A task management app built with React.",
        link: "https://taskmanager.com",
      },
    ],
  };

  return (
    <div className={`${styles.main_div}`}>
      <div className={`${styles.second_div}`}>
        <Header
          name={resumeData.name}
          email={resumeData.email}
          phone={resumeData.phone}
        />
        <About />
        <Experience jobs={resumeData.experience} />
        <Education schools={resumeData.education} />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
      </div>
    </div>
  );
};

export default Resume;
