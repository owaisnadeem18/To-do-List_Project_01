import React from "react";

export default function ToDoList({ data, text, DeletedItems }) {
  const handleDelete = () => {
    DeletedItems(data.id);
  };
  return (
    <>
      <div className="todo_style">
        {/* <i class="fa-solid fa-x"></i> */}
        <li>
          {text}
          <button onClick={handleDelete}>Delete</button>
        </li>
      </div>
    </>
  );
}
