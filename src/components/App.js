import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
const [selectedCategory, setSelectedCategory] = useState("All")
const [ taskItems, setTaskItems ] = useState(TASKS)

const filteredTasks =taskItems.filter(task => {
  return selectedCategory === task.category || selectedCategory === "All"
})

const deleteTask = (taskToDelete) => {
  const newTaskItems =taskItems.filter(task => task.text !== taskToDelete) 
  setTaskItems(newTaskItems)
}

const addTask = (taskToAdd) => {
  setTaskItems([...taskItems, taskToAdd])
}

console.log("Original TASKS Variable: ")
console.log(TASKS)
console.log("Dynamic taskItems State: ")
console.log(taskItems)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={addTask}
      />
      <TaskList 
      deleteTask={deleteTask}
      tasks={filteredTasks}
      />
    </div>
  );
}

export default App;
