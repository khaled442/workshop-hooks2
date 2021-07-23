import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ taskList,handleComplet,handleDelete }) => {
  return (
    <div>
      {taskList.map((el) => (
        <TaskItem el={el} key={el.id} handleComplet={handleComplet} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
