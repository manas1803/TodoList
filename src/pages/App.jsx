import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { Container } from "@mui/material";
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import "./App.css";

const App = () => {
  const { todos } = useContext(TodoContext);
  const completeTodos = todos.filter((todo) => todo.isComplete);
  const incompleteTodos = todos.filter((todo) => !todo.isComplete);

  return (
    <Container fixed>
      <AddTodo />
      <TodoList todos={incompleteTodos} title="Pending Tasks"/>
      <TodoList todos={completeTodos} title="Completed Tasks"/>
    </Container>
  );
};

export default App;
