import "./App.css";
import FilterComponent from "./Components/FilterComponent";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import TableRow from "./Components/TableRow";
import TasksTable from "./Components/TasksTable";

const taskData = {
  totalTasks: 3,
  data: [
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
  ],
};

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <FilterComponent></FilterComponent>
      <TasksTable rows={taskData}></TasksTable>
    </div>
  );
}

export default App;
