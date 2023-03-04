import React, { useState } from "react";
import TableRow from "../Components/TableRow";
import styles from "../CSS/TasksTable.module.css";
import { menu } from "../Icons";

const TasksTable = (props) => {
  const rows = props.rows.map((row, index) => (
    <TableRow
      taskName={row.taskName}
      taskId={row.taskId}
      taskDate={row.taskDate}
      taskStatus={row.taskStatus}
      taskPriority={row.taskPriority}
    ></TableRow>
  ));

  console.log(rows);

  return (
    <React.Fragment>
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
        <tbody>
          {
            <tr className={`${styles["empty-row"]}`}>
              <td className={`${styles["empty-cell"]}`} colSpan={5}></td>
            </tr>
          }

          {rows}
        </tbody>
      </table>
      <div className={`${styles["div-add-task-button"]}`}>
        <button className={`${styles["button"]}`}>Add Task</button>
      </div>
    </React.Fragment>
  );
};

export default TasksTable;
