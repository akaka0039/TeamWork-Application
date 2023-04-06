import React from "react";
import styles from "../CSS/InvisibleDropdown.module.css";
const InvisibleDropdown = (props) => {
  const { options } = props;

  const list = options.listOfOptions.map((item, index) => (
    <li key={index} className={`${styles["ul-li"]}`}>
      {item}
    </li>
  ));

  return (
    <div
      className={`${styles["div-drop-down"]} ${
        props.isHide ? `${styles["hide"]}` : ""
      }`}
    >
      <ul className={`${styles["ul-drop-down"]}`}>{list}</ul>
    </div>
  );
};

export default InvisibleDropdown;
