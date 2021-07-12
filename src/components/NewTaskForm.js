import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [ textInput, setTextInput ] = useState("")
  const [ categoryInput, setCategoryInput ] = useState("Code")

  const handleTextChange = (event) => setTextInput(event.target.value)
  const handleCategoryChange = (event) => setCategoryInput(event.target.value)

  const handleSubmitForm = (event) => {
    event.preventDefault()
    onTaskFormSubmit({ text: textInput, category: categoryInput})
  }

  return (
    <form 
      className="new-task-form"
      onSubmit={handleSubmitForm}  
      >
    <label>
      Details
      <input 
        name="text" 
        onChange={handleTextChange}
        type="text"
        value={textInput}
    />
      </label>
      <label>
        Category
        <select 
          name="category"
          onChange={handleCategoryChange}
          value={categoryInput}
      >
        {
          categories.map((category) => (
            category === "All" ? null : <option value={category}>{category}</option>
          ))
        }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
