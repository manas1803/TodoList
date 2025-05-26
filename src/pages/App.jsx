import AddTodo from "../components/AddTodo";

import "./App.css";
import TodoList from "../components/TodoList";
const App = () => {
  return (
    <div className="container flex flex-col bg-gray-100">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
