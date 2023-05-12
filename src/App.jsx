import "./App.css";
import AddTodo from "./components/AddTodo";
import ProgressTodo from "./components/ProgressTodo";
import TodoList from "./components/TodoList";
import TodoProvider from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <AddTodo />
        <ProgressTodo/>
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
