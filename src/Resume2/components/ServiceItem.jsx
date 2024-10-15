import React from "react";
import styles from "../Resume2.module.css";

const ServiceItem = ({ title, description }) => {
  return (
    <div className={styles.service_item}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
