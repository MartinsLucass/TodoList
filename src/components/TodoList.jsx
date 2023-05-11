import React, { useContext } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoList() {
  const context = useContext(TodoContext);

  // Filter the todos into completed and incomplete arrays
  const completedTodos = context.todos.filter((todo) => todo.done);
  const incompleteTodos = context.todos.filter((todo) => !todo.done);

  // Map the arrays into TodoListItem components
  const completedTodosData = completedTodos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} />
  ));
  const incompleteTodosData = incompleteTodos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} />
  ));

  return (
    <main>
      <h2>Task</h2>

      {/* Display the incomplete todos */}
      {incompleteTodosData}

      {/* Display the completed todos if there are any */}
      {completedTodos.length > 0 && (
        <>
          <h2>
            {/* Display the number of completed todos and the total number of todos */}
            Completed ({completedTodos.length} / {context.todos.length})
          </h2>
          {completedTodosData}
        </>
      )}
    </main>
  );
}
