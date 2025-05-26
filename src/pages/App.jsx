import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { Container } from "@mui/material";

import "./App.css";

const App = () => {
  return (
    <Container fixed>
      <AddTodo />
      <TodoList />
    </Container>
  );
};

export default App;
