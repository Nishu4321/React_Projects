import React from "react";
import styles from "../Resume2.module.css";
import LetterAvatars from "./Material UI/LetterAvatars";
import HalfRating from "./Material UI/HalfRating";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile_section}>
        {/* <img src="profile.jpg" alt="Nishanth" className={styles.profile_img} /> */}
        <div className={styles.avatar}>
          <LetterAvatars />
        </div>

        <h2>Nishanth</h2>
        <h4>B.Tech</h4>
      </div>
      <div className={styles.contact_info}>
        <p>
          <strong>DOB:</strong> 21/05/2000
        </p>
        <p>
          <strong>Location:</strong> Mysore, Karnataka
        </p>
        <p>
          <strong>E-Mail:</strong> nishanthnishu4321@gmail.com
        </p>
        <p>
          <strong>Contact:</strong> +91 9986231930
        </p>
      </div>
      <div className={styles.skills_section}>
        <h3>Languages</h3>
        <ul>
          <li>
            English - <HalfRating />
          </li>
          <li>
            Kannada -<HalfRating />
          </li>
        </ul>
        <h3>Skills</h3>
        <ul>
          <li>
            HTML - <HalfRating />
          </li>
          <li>
            CSS - <HalfRating />
          </li>
          <li>
            JavaScript - <HalfRating />
          </li>
          <li>
            React.js - <HalfRating />
            cx
          </li>
        </ul>
      </div>
      <div className={styles.extra_skills}>
        <h3>Extra Skills</h3>
        <ul>
          <li>Debugging</li>
          <li>Design Thinking</li>
          <li>Teamwork and collaboration</li>
          <li>Reporting</li>
        </ul>
      </div>
      <div className={styles.education}>
        <h3>Education</h3>
        <ul>
          <li>JSS Science and Technology University.(7.53 CGPA) </li>
          <li>2018-2022 Mysuru.</li>
        </ul>
      </div>
      <div className={styles.education}>
        <h3>Hobbies</h3>
        <ul>
          <li>Learing new Technologies</li>
          <li>Reading Books</li>
          <li>Sports</li>
          <li>Photography</li>
        </ul>
      </div>
      {/* <div className={styles.btn}>
        <button className={styles.download_cv}>Download CV</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
