import React, { useState } from "react";

import "./App.css";







function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task === "") {
      return;
    }
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = index => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1 className="app-header">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Enter a task"
          className="task-input"
        />
        <button className="add-task-btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {taskList.map((task, index) => (
          <li key={index} className="task-item">
            {task}{" "}
            <button className="delete-task-btn" onClick={() => deleteTask(index)}>

              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
