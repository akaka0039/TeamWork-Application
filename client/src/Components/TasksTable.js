import React, { useState, useEffect } from "react";
import TableRow from "../Components/TableRow";
import styles from "../CSS/TasksTable.module.css";
import { menu } from "../Icons";
import axios from "axios";
import stylesRow from "../CSS/TableRow.module.css";

const TasksTable = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState({
    taskName: "",
    // not necessary
    taskId: "1",
    taskDate: "",
    status: "",
    priority: "",
  });

  // const onSubmit2 = (ev) => {
  //   alert("test");
  //   // setIsHide(false);
  //   // return (
  //   //   <InvisibleDropdown isHide={true} data={changedTask}></InvisibleDropdown>
  //   // );
  // };

  useEffect(() => {
    getTask();
  }, [setTask]);

  const getTask = async () => {
    const res = await axios.get(`http://localhost:3001/api/tasks`);
    setTask(res.data);
  };

  const rowsArray = task
    .map((row) => {
      return (
        <TableRow
          _id={row._id}
          taskName={row.taskName}
          taskId={row.taskId}
          taskDate={row.taskDate}
          status={row.status}
          priority={row.priority}
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

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (
      !newTask.taskName ||
      !newTask.taskDate ||
      !newTask.status ||
      !newTask.priority
    ) {
      alert("All fields required.");
      return;
    }
    axios.put(`http://localhost:3001/api/tasks`, newTask);
    window.location.reload();
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

      {/* add table */}
      <form onSubmit={onSubmit}>
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
            <tr>
              <td className={`${styles["heading-task-name"]}`}></td>
              <td>
                <input
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      taskName: e.target.value,
                    })
                  }
                  className={`${stylesRow["input-task-name"]}`}
                  type={"text"}
                  defaultValue="taskName"
                ></input>
              </td>
              <td>member</td>
              <td>
                <input
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      taskDate: e.target.value,
                    })
                  }
                  className={`${stylesRow["input-task-name"]}`}
                  type={"text"}
                  defaultValue="20230405"
                ></input>
              </td>
              <td>
                <input
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      status: e.target.value,
                    })
                  }
                  className={`${stylesRow["input-task-name"]}`}
                  type={"text"}
                  defaultValue="nomal"
                ></input>
              </td>
              <td>
                <input
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      priority: e.target.value,
                    })
                  }
                  name="priority"
                  className={`${stylesRow["input-task-name"]}`}
                  type={"text"}
                  defaultValue="nomal"
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button className={`${styles["button"]}`}>Add Task</button>
      </form>
    </React.Fragment>
  );
};

export default TasksTable;
