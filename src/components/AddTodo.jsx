import React, { useContext, useState } from "react";
import "./AddTodo.css";
import { TodoContext } from "../contexts/TodoContext";

export default function AddTodo() {
  const { saveTodo } = useContext(TodoContext);

  const [todo, setTodo] = useState({});

  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // if the input value is empty, display an alert and return
    if (!inputValue.trim()) {
      window.alert("Input cannot be empty");
      return;
    }

    saveTodo(todo);

    // reset the todo and input value
    setTodo({});
    setInputValue("");
  };

  const handlInputChange = (e) => {
    // update the todo object with the new title
    setTodo({
      ...todo,
      title: e.target.value,
    });

    // update the input value
    setInputValue(e.target.value);
  };

  return (
    <header>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          value={inputValue}
          onChange={handlInputChange}
          id="new-tesk-input"
          name="todo"
          type="text"
          autoComplete="off"
          maxLength={50}
          placeholder=" What is the task?"
        />
        <button id="new-tesk-button">ADD</button>
      </form>
    </header>
  );
}
