import React, { useContext, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { TodoContext } from "./context/TodoContext";

function App() {
  const [task, setTask] = useState("");

  const { todos,addTodos } = useContext(TodoContext);

  const handleTodolist = () => {
    addTodos(task)
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
        {todos &&
          todos.map(({ taskId, taskName, isComplete, isEditable }) => {
            return (
              <Todo
                taskId={taskId}
                taskName={taskName}
                isComplete={isComplete}
                isEditable={isEditable}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
