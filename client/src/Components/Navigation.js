import React from "react";
import styles from "../CSS/Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles["navigation"]}>
      <ul className={styles["nav-items"]}>
        <li className={`${styles["tasks-link"]} margin-bottom`}>Tasks</li>
        <li className={styles["people-link"]}>People</li>
      </ul>
    </nav>
  );
};

export default Navigation;
