import AddTodo from "../components/AddTodo";

import "./App.css";
import TodoList from "../components/TodoList";
const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <div className="TodoList">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
