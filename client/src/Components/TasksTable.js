import React, { useState, useEffect } from "react";
import TableRow from "../Components/TableRow";
import styles from "../CSS/TasksTable.module.css";
import { menu } from "../Icons";
import axios from "axios";

const taskData = [
  {
    taskId: 1,
    taskName: "task 1",
    taskDate: "2023/03/02",
    taskStatus: "completed",
    taskPriority: "important",
  },
  {
    taskId: 2,
    taskName: "task 2",
    taskDate: "2023/03/06",
    taskStatus: "completed",
    taskPriority: "important",
  },
  {
    taskId: 3,
    taskName: "task 3",
    taskDate: "2023/03/010",
    taskStatus: "completed",
    taskPriority: "important",
  },
];
const TasksTable = (props) => {
  const [task, setTask] = useState([]);
  const [tasksList, setTasksList] = useState(taskData);
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    const getTask = async () => {
      const res = await axios.get(`http://localhost:3001/api/tasks`);
      setTask(res.data);
    };
    getTask();
  }, []);

  const rowsArray = task
    .map((row) => {
      return (
        <TableRow
          taskName={row.title}
          taskId={row.taskId}
          taskDate={row.taskDate}
          taskStatus={row.status}
          taskPriority={row.priority}
        ></TableRow>
      );
    })
    .concat(
      newTask ? (
        <TableRow>
          taskName="" taskId="" taskDate="" taskStatus="" taskPriority=""
        </TableRow>
      ) : (
        []
      )
    );

  const addRow = () => {
    setNewTask((val) => !val);
  };

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
        <tbody>{rowsArray}</tbody>
      </table>
      <div className={`${styles["div-add-task-button"]}`}>
        <button className={`${styles["button"]}`} onClick={addRow}>
          Add Task
        </button>
      </div>
    </React.Fragment>
  );
};

export default TasksTable;
