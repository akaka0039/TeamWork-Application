import React from "react";
import styles from "../CSS/DropdownList.module.css";

const DropdownList = (props) => {
  const { dropDownDetail } = props;
  return (
    <select
      className={styles["select"]}
      name={props.name}
      id={dropDownDetail.id}
    >
      {dropDownDetail.items.map((item, index) => {
        return (
          <option key={index} values={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default DropdownList;
