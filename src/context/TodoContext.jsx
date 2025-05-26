import React, { createContext, useState } from "react";

export const TodoContext = createContext([]);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodos = (task)=>{
    const newTask = {
      taskId: Date.now().toString(),
      taskName: task,
      isComplete: false,
      isEditable: false,
    };
    setTodos((prev) => [...prev, newTask]);
  }

  const removeTodos = (taskId)=>{
    setTodos((prev) => prev.filter((todo) => todo.taskId !== taskId));
  }

  const completeTodo = (taskId)=>{
    setTodos((prev) =>
      prev.map((todo) =>
        todo.taskId === taskId ? { ...todo, isComplete: true } : todo
      )
    );
  }

  const editTodos = (taskId,editedTask,isEditable)=>{
    if (isEditable) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.taskId === taskId
            ? { ...todo, isEditable: false, taskName: editedTask }
            : todo
        )
      );
    } else {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.taskId === taskId ? { ...todo, isEditable: true } : todo
        )
      );
    }
  }

  return (
    <TodoContext.Provider value={{ todos, addTodos,removeTodos,completeTodo,editTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
