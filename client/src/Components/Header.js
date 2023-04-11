import React from "react";
import styles from "../CSS/Header.module.css";
const Header = () => {
  return (
    <header className={`${styles["header"]} center-1`}>
      <div className={styles["div-heading-date"]}>
        <h1 className={styles["heading"]}>toDo app</h1>
        <span className={styles["date"]}>Tuesday, Feb 14, 2023</span>
      </div>
      <div className={styles["div-sign-out-button-profile"]}>
        <button className={styles["sign-out-button"]}>Sign out</button>
        <div className={styles["profile"]}>
          <span>G</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
