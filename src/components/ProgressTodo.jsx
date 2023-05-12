import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "./ProgressTodo.css";

export default function ProgressTodo() {
  const context = useContext(TodoContext);

  const completedTodos = context.todos.filter((todo) => todo.done);
  const totalTodos = context.todos.length;
  const completionPercentage =
    totalTodos > 0 ? (completedTodos.length / totalTodos) * 100 : 0;

  return (
    <div className="bar-Todo">
      <>
        <div className="progress-bar">
          <div
            className="done-bar"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <div className="progress-text">
          <h2>
            ({completedTodos.length}/{totalTodos})
          </h2>
        </div>
      </>
    </div>
  );
}
