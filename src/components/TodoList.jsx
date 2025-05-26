import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.map(({ taskId, taskName, isComplete, isEditable }) => {
    return (
      <Todo
        taskId={taskId}
        taskName={taskName}
        isComplete={isComplete}
        isEditable={isEditable}
      />
    );
  });
};

export default TodoList;
