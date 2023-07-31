import React, { useState } from "react";
import ToDoList from "./Components/ToDoList";
import Swal from "sweetalert2";

export default function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  // const ItemList = () => {
  //   setItems((oldItems) => {
  //     return [...oldItems, inputList];
  //   });
  //   setInputList(""); // Reset the input field to an empty string after adding the item};
  // };
  const AddItem = () => {
    if (inputList.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputList.trim(),
      };
      setItems([...Items, newTodo]);
      setInputList("");
    } else {
      Swal.fire("Please Enter an Item");
    }
  };
  const DeletItems = (id) => {
    setItems(Items.filter((todo) => todo.id !== id));
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
        <button onClick={AddItem}> + </button>
        <ToDoList list={Items} deleteTodo={DeletItems} />
      </div>
    </div>
  );
}
