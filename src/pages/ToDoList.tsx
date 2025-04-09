import { SetStateAction, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete Task
            </button>
            <button
              className="move-button-up"
              onClick={() => moveTaskUp(index)}
            >
              Move Task 👆
            </button>
            <button
              className="move-button-down"
              onClick={() => moveTaskDown(index)}
            >
              Move Task 👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
