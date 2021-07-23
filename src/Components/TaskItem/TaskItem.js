import React from "react";
import "./TaskItem.css"

const TaskItem = ({ el, handleComplet,handleDelete }) => {
  return (
    <div className="task">
      <p className={el.isDone ? "Done": null}>{el.task}</p>
      <button onClick={()=>handleComplet(el.id)}>{el.isDone ? "Complet" : "Undo"}</button>
      <button onClick={()=>handleDelete(el.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
