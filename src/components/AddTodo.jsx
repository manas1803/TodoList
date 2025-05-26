import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const { addTodos } = useContext(TodoContext);

  const handleTodolist = () => {
    addTodos(task);
    setTask("");
  };
  return (
    <div className="rounded-sm">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.currentTarget.value)}
      />
      <button onClick={handleTodolist}>Add</button>
    </div>
  );
};

export default AddTodo;
