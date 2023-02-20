import React from "react";
import TableRow from "../Components/TableRow";
import styles from "../CSS/TasksTable.module.css";
import { menu } from "../Icons";
const TasksTable = (props) => {
  return (
    <table className={`${styles["tasks-table"]} `}>
      <thead className={`${styles["tasks-table-header"]}`}>
        <tr className={`${styles["tasks-table-header-row"]}`}>
          <th className={`${styles["heading-tasks-selector"]}`}>
            <span>{menu}</span>
            <input
              type="checkbox"
              id="all-tasks"
              name="all-tasks"
              value="all-tasks-selected"
            ></input>
          </th>
          <th className={`${styles["heading-task-name"]}`}>Task Name</th>
          <th className={`${styles["heading-members"]}`}>Members</th>
          <th className={`${styles["heading-date"]}`}>Date</th>
          <th className={`${styles["heading-status"]}`}>Status</th>
          <th className={`${styles["heading-priority"]}`}>Priority</th>
        </tr>
      </thead>
      <tr className={`${styles["empty-row"]}`}>
        <td className={`${styles["empty-cell"]}`} colSpan={5}></td>
      </tr>
      <TableRow task={{ name: "task 1", deadline: "2023-02-19" }}></TableRow>
      <TableRow task={{ name: "task 2", deadline: "2023-02-25" }}></TableRow>
    </table>
  );
};

export default TasksTable;
