import React, { useState } from "react";
import "./App.css";
import { ITask } from "./App.types";
import Todo from "./Todo";

function App() {
  const [todolist, setTodolist] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>("");

  const handleTodolist = () => {
    const newTask = {
      taskId: Date.now().toString(),
      taskName: task,
      isComplete: false,
      isEditable: false,
    };
    setTodolist((prev) => [...prev, newTask]);
    setTask("");
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.currentTarget.value)}
        />
        <button onClick={handleTodolist}>Add</button>
      </div>
      <div className="TaskLists">
        {todolist &&
          todolist.map(({ taskId, taskName, isComplete, isEditable }) => {
            return <Todo taskId={taskId} taskName={taskName} isComplete={isComplete} isEditable={isEditable} setTodolist={setTodolist}/>
          })}
      </div>
    </div>
  );
}

export default App;
