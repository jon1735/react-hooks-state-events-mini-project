import React from "react";

function Task({ category, text, deleteTask }) {
  const handleOnClick = () => deleteTask(text)
  
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
           className="delete"
           onClick={handleOnClick}
      >
        X
        </button>
    </div>
  );
  }

export default Task;
