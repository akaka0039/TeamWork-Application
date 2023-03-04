import React from "react";
import styles from "../CSS/AddTaskButton.module.css";

const AddTaskButton = () => {
  return (
    <div>
      <button className={`${styles["button"]}`}>Add Task</button>
    </div>
  );
};

export default AddTaskButton;
