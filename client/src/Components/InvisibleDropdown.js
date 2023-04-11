import React, { useState, useEffect } from "react";
import styles from "../CSS/InvisibleDropdown.module.css";
import axios from "axios";

const InvisibleDropdown = (props) => {
  const [isHide, setIsHide] = useState(true);
  const id = useState(props.id);

  const onUpdate = (props) => {
    axios
      .put(`http://localhost:3001/api/tasks/${id}`, props.data)
      .then(() => window.location.reload())
      .catch(() => {
        alert("deleting is failed");
      });
    window.location.reload();
  };

  const onDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }
    axios
      .delete(`http://localhost:3001/api/tasks/${id}`)
      .then(() => window.location.reload())
      .catch(() => {
        alert("deleting is failed");
      });
  };

  return (
    <div
      isHide={isHide}
      className={`${styles["div-drop-down"]} ${
        props.isHide ? `${styles["hide"]}` : ""
      }`}
    >
      <ul className={`${styles["ul-drop-down"]}`}>
        <button
          onClick={() => onUpdate(props)}
          className={`${styles["ul-li"]}`}
        >
          Update
        </button>
        <button
          onClick={() => onDelete(props.id)}
          className={`${styles["ul-li"]}`}
        >
          Delete
        </button>
      </ul>
    </div>
  );
};

export default InvisibleDropdown;
