import React, { useState } from "react";

const AddTask = ({handleAdd}) => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="add">
      <input type="text" onChange={handleChange} 
      value={text}
    />
      <button onClick={()=>{handleAdd(text);setText("")}}>Add</button>
    </div>
  );
};

export default AddTask;
