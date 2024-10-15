import React from "react";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import styles from "./Resume2.module.css";

function Resume2() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <MainSection />
    </div>
  );
}

export default Resume2;
