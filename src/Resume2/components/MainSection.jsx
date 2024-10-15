import React from "react";
import ServiceItem from "./ServiceItem";
import styles from "../Resume2.module.css";

const MainSection = () => {
  return (
    <div className={styles.main_section}>
      <div className={styles.intro_section}>
        <h1>I’m Nishanth</h1>
        {/* <h2>Front-end Developer</h2> */}
        {/* <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p> */}
        {/* <button className={styles.hire_me_btn}>Hire Me</button> */}
        <div className={styles.about_section}>
          <h3>About</h3>

          <p>
            I graduate with a B.Tech degree in Computer Science and Engineering
            from JSS Science and Technology University.
          </p>
          <p>
            Throughout my academic journey, I have developed a strong foundation
            in JavaScript, HTML, CSS, React.js.
          </p>
          <p>
            I am excited to kick-start my career in where I can contribute my
            technical skills, eagerness to learn, and dedication to continuous
            improvement
          </p>
        </div>
      </div>

      <div className={styles.experience_section}>
        <h3>Experience</h3>
        <p>HAILABS</p>
        <p>July(2023)</p>
        <p>
          Standardized Test Plan, Test Scripts/Test Cases, Daily Status Reports,
          etc., documents leading to a 20% increase in productivity.
        </p>
      </div>

      <div className={styles.services_section}>
        <h2>Projects</h2>
        <div className={styles.services_grid}>
          <ServiceItem title="Tic Tac Tao" description="Game" />
          <ServiceItem title="Dice Game" description="Game" />
          <ServiceItem title="Quiz App" description="Game" />
          <ServiceItem title="E_commerce" description="E commerce" />
          <ServiceItem title="Real Estate" description="Adding Properties" />
          <ServiceItem title="Shopping Cart" description="Shopping cart" />
          <ServiceItem
            title="Social Media Post"
            description="Social Media post"
          />
          <ServiceItem title="Rock Papper Scissors" description="Game" />
          <ServiceItem title="Todo List" description="Adding Todo List" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
