import React, { useState } from "react";
import styles from "../CSS/TableRow.module.css";
import { dateToStr } from "../Js/functions.js";
import { menu } from "../Icons";
import DropdownList from "./DropdownList";
import ListOfMembers from "./ListOfMembers";
import InvisibleDropdown from "./InvisibleDropdown";
const TableRow = (props) => {
  const [isHide, setIsHide] = useState(true);

  return (
    <tr key={Math.random()} className={`${styles["table-row"]}`}>
      <td className={`${styles["cell-task-selector"]}`}>
        <span onClick={() => setIsHide((isHide) => !isHide)}>{menu}</span>
        <input
          type="checkbox"
          id={props.taskId}
          name={props.taskName}
          value={props.taskName}
        ></input>
        <InvisibleDropdown
          isHide={isHide}
          options={{ listOfOptions: ["delete", "add"] }}
        ></InvisibleDropdown>
      </td>

      <td className={`${styles["cell-task-name"]}`}>
        <input
          className={`${styles["input-task-name"]}`}
          type={"text"}
          defaultValue={props.taskName}
        ></input>
      </td>
      <td className={`${styles["cell-members"]}`}>
        <ListOfMembers members={{ items: ["G", "E", "C"] }}></ListOfMembers>
      </td>
      <td className={`${styles["cell-date"]}`}>
        <input
          className={`${styles["input-date"]}`}
          type="date"
          min={dateToStr}
          max="9999-12-31"
          defaultValue={props.taskDate}
        ></input>
      </td>
      <td className={`${styles["cell-status"]}`}>
        <DropdownList
          dropDownDetail={{
            id: "status",
            items: ["completed", "progressing", "unassigned"],
          }}
        ></DropdownList>
      </td>
      <td className={`${styles["cell-priority"]}`}>
        <DropdownList
          dropDownDetail={{
            id: "status",
            items: ["most important", "normal", "least important"],
          }}
        ></DropdownList>
      </td>
    </tr>
  );
};

export default TableRow;
