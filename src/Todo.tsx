import React, { useState } from "react";
import { ITodo } from "./App.types";

function Todo({
  taskId,
  taskName,
  isComplete,
  isEditable,
  setTodolist,
}: ITodo) {
  const [editedTask, setEditedTask] = useState<string>(taskName);
  const handleRemoveTask = (taskId: string) => {
    setTodolist((prev) => prev.filter((todo) => todo.taskId !== taskId));
  };

  const handleTaskComplete = (taskId: string) => {
    setTodolist((prev) =>
      prev.map((todo) =>
        todo.taskId === taskId ? { ...todo, isComplete: true } : todo
      )
    );
  };

  const handleEditSaveTask = (taskId: string, isEditable: boolean) => {
    if (isEditable) {
      setTodolist((prev) =>
        prev.map((todo) =>
          todo.taskId === taskId
            ? { ...todo, isEditable: false, taskName: editedTask }
            : todo
        )
      );
    } else {
      setTodolist((prev) =>
        prev.map((todo) =>
          todo.taskId === taskId ? { ...todo, isEditable: true } : todo
        )
      );
    }
  };
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
          onChange={() => handleTaskComplete(taskId)}
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
        onClick={() => handleEditSaveTask(taskId, isEditable)}
        disabled={isComplete}
      >
        {isEditable ? "Save" : "Edit"}{" "}
      </button>
      <button onClick={() => handleRemoveTask(taskId)}>Delete</button>
    </div>
  );
}

export default Todo;
