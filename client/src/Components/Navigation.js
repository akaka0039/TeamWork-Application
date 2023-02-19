import React from "react";
import styles from "../CSS/Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={`${styles["div-navigation"]}`}>
      <nav>
        <ul className={`${styles["nav-items"]}`}>
          <li className={`${styles["tasks-link"]}`}>Tasks</li>
          <li className={`${styles["tasks-link"]}`}>Memebers</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
