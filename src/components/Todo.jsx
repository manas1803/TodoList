import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ taskId, taskName, isComplete, isEditable })=> {
  const [editedTask, setEditedTask] = useState(taskName);
  const { editTodos, removeTodos, completeTodo } = useContext(TodoContext);
  return (
    <div
      key={taskId}
      className="todoItem"
      task-complete={isComplete ? "complete" : ""}
    >
      <label className="radio-option">
        <input
          type="radio"
          name="task"
          value={taskId}
          onChange={() => completeTodo(taskId)}
          disabled={isComplete}
        />
        <input
          type="text"
          disabled={!isEditable || isComplete}
          value={editedTask}
          onChange={(e) => setEditedTask(e.currentTarget.value)}
        />
      </label>
      <button
        onClick={() => editTodos(taskId, editedTask, isEditable)}
        disabled={isComplete}
      >
        {isEditable ? "Save" : "Edit"}{" "}
      </button>
      <button onClick={() => removeTodos(taskId)}>Delete</button>
    </div>
  );
}

export default Todo;
