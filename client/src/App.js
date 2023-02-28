import "./App.css";
import FilterComponent from "./Components/FilterComponent";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import TasksTable from "./Components/TasksTable";
import Test from "./test/Test";

function App() {
  return (
    <div className="App">
      <Test />
      {/* <Header></Header>
      <Navigation></Navigation>
      <FilterComponent></FilterComponent>
      <TasksTable></TasksTable> */}
    </div>
  );
}

export default App;
