import React, { useState } from "react";
import styles from "../CSS/TableRow.module.css";
import { dateToStr } from "../Js/functions.js";
import { menu } from "../Icons";
import DropdownList from "./DropdownList";
import ListOfMembers from "./ListOfMembers";
import InvisibleDropdown from "./InvisibleDropdown";

const TableRow = (props) => {
  const [isHide, setIsHide] = useState(true);

  const [changedTask, setChangedTask] = useState({
    taskName: "",
    // not necessary
    taskId: "1",
    taskDate: "",
    status: "",
    priority: "",
  });

  return (
    <tr key={Math.random()} className={styles["table-row"]}>
      <td className={styles["cell-task-selector"]}>
        <span onClick={() => setIsHide((isHide) => !isHide)}>{menu}</span>
        <input
          type="checkbox"
          onChange={(e) =>
            setChangedTask({
              ...changedTask,
              id: e.target.value,
            })
          }
          id={props._id}
          name={props.taskName}
          value={props.taskName}
        ></input>
      </td>
      <InvisibleDropdown
        isHide={isHide}
        data={changedTask}
        id={props._id}
      ></InvisibleDropdown>

      <td className={styles["cell-task-name"]}>
        <input
          className={styles["input-task-name"]}
          type={"text"}
          value={props.taskName}
          onChange={(e) =>
            setChangedTask({
              ...changedTask,
              taskName: e.target.value,
            })
          }
        ></input>
      </td>

      {/* member */}
      <td className={styles["cell-members"]}>
        <ListOfMembers></ListOfMembers>
      </td>

      {/* taskDate */}
      <td className={styles["cell-date"]}>
        <input
          className={styles["input-date"]}
          type="date"
          min={props.taskDate}
          max="9999-12-31"
          value={props.taskDate}
          onChange={(e) =>
            setChangedTask({
              ...changedTask,
              taskDate: e.target.value,
            })
          }
        ></input>
      </td>

      {/* taskStatus */}
      <td className={styles["cell-status"]}>
        {/* <DropdownList
          dropDownDetail={{
            id: "status",
            items: ["completed", "progressing", "unassigned"],
          }}
        ></DropdownList> */}
        <input
          onChange={(e) =>
            setChangedTask({
              ...changedTask,
              status: e.target.value,
            })
          }
          className={styles["input-date"]}
          type="text"
          value={props.status}
        ></input>
      </td>

      {/* taskPriority */}
      <td className={styles["cell-priority"]}>
        {/* <DropdownList
          dropDownDetail={{
            id: "status",
            items: ["most important", "normal", "least important"],
          }}
        ></DropdownList> */}
        <input
          onChange={(e) =>
            setChangedTask({
              ...changedTask,
              priority: e.target.value,
            })
          }
          className={styles["input-date"]}
          type="text"
          value={props.priority}
        ></input>
      </td>
    </tr>
  );
};

export default TableRow;
