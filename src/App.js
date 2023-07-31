import React, { useState } from "react";
import ToDoList from "./Components/ToDoList";

export default function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ItemList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(""); // Reset the input field to an empty string after adding the item};
  };

  const DeletedItems = (id) => {
    Items.filter((item) => {
      setItems(item.id !== id);
    });
  };
  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>To-Do List</h1>
        <br />
        <input
          type="text"
          placeholder="Add Items"
          onChange={itemEvent}
          value={inputList}
          className="add-items"
        />
        <button onClick={ItemList}> + </button>
        <ol>
          {Items.map((itemval, index) => {
            return (
              <ToDoList
                key={index}
                text={itemval}
                DeletedItems={DeletedItems}
                data={Items}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
