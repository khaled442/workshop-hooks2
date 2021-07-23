import "./App.css";
import TaskList from "./Components/TaskList/TaskList";
import { useState } from "react";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      task: "Learn HTML and CSS",
      isDone: true,
    },
    {
      id: 2,
      task: "Learn Node js",
      isDone: false,
    },
    {
      id: 3,
      task: "Learn Express",
      isDone: false,
    },
  ]);
  const handleComplet = (idTask) => {
    setTaskList(
      taskList.map((el) =>
        el.id === idTask ? { ...el, isDone: !el.isDone } : el
      )
    );
  };
  const handleDelete = (idTask) => {
    setTaskList(taskList.filter((el) => el.id !== idTask));
  };
  const handleAdd = (newTask) => {
    setTaskList([...taskList,{id: Math.random(), task:newTask, isDone:false}])
  }
  return (
    <div className="app">
      <h1>Todo App</h1>
      <AddTask handleAdd={handleAdd}/>
      <TaskList
        taskList={taskList}
        handleComplet={handleComplet}
        handleDelete={handleDelete}
      />
      
    </div>
  );
}

export default App;
