import React from "react";
import styles from "../CSS/ListOfMembers.module.css";
const ListOfMembers = (props) => {
  const { members } = props;
  return members.items.map((item) => {
    return (
      <div className={styles["member"]}>
        <span>G</span>
      </div>
    );
  });
};

export default ListOfMembers;
