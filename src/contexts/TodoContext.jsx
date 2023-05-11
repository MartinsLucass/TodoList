import React, { useState, createContext } from "react";

// Create a context for the todos
export const TodoContext = createContext();

// Define a TodoProvider component that wraps its children with the TodoContext provider
const TodoProvider = ({ children }) => {
  // Set the initial state of the todos to an empty array
  const [todos, setTodos] = useState([]);

  // Define a function to save a new todo to the state
  const saveTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1, // Create a new ID based on the current length of the todos array
      title: todo.title,
      done: false,
    };
    setTodos([...todos, newTodo]); // Add the new todo to the array of todos
  };

  // Define a function to delete a todo from the state based on its ID
  const deleteTodo = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id) // Create a new array of todos that doesn't include the one with the specified ID
    setTodos(filtered) // Update the state with the new array of todos
  };
  
  // Define a function to toggle the "done" status of a todo based on its ID
  const checkTodo = (id) => {
    // Map over the existing todos array and update the "done" status of the todo with the specified ID
    const updatedTodos = todos.map(todo => {
      if (todo.id === id && todo.done === true) {
        return {
          ...todo,
          done: false
          
        };
      } else if (todo.id === id && todo.done === false){
        return {
          ...todo,
          done: true
        };
      }
      return todo; 
    });
    setTodos(updatedTodos); // Update the state with the new array of todos
  };

 
  return (
    <TodoContext.Provider value={{ todos, saveTodo, deleteTodo, checkTodo, }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
