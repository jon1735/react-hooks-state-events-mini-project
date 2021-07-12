import React from "react";

import Task from "./Task";

function TaskList({ deleteTask, tasks }) {
  const taskCards = tasks.map((task, index) => (
  <Task
      category={task.category}
      deleteTask={deleteTask}
      key={`task-${index}`}
      text={task.text}
  />
))

  return (
    <div className="tasks">
      {taskCards}
    </div>
  );
}

export default TaskList;
