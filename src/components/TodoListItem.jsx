import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "./TodoListItem.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Checkbox } from "@mui/material";

export default function TodoListItem({ todo }) {
  const { deleteTodo, checkTodo } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleCheck = () => {
    checkTodo(todo.id);
  };

  // Render TodoListItem component
  return (
    // Add CSS class to indicate if item is done
    <div className="TodoListItem" id={`TodoListItem${todo.done ? "Done" : ""}`}>
      <div id="check">
        {/* Add MUI Checkbox component */}
        <Checkbox
          checked={todo.done}
          onChange={handleCheck}
          sx={{
            color: "aliceblue",
            "&.Mui-checked": {
              color: "aliceblue",
            },
          }}
        />
      </div>
      <div id="item">
        {/* Display the title of the todo item */}
        {todo.title}
      </div>
      <div>
        <div id="button">
          {/* Add MUI DeleteOutlineIcon component */}
          <button onClick={handleDelete}>
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
