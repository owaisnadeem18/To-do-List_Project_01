// import React from "react";

// export default function ToDoList({ data, text, DeletedItems }) {
//   const handleDelete = () => {
//     DeletedItems(data.id);
//   };
//   return (
//     <>
//       <div className="todo_style">
//         {/* <i class="fa-solid fa-x"></i> */}
//         <li>
//           {text}
//           <button onClick={handleDelete}>Delete</button>
//         </li>
//       </div>
//     </>
//   );
// }

import React from "react";

const ToDoList = ({ list, deleteTodo }) => {
  console.log(list);
  return (
    <div>
      <ul>
        {list.map((item) => {
          return (
            <li>
              {item.text}{" "}
              <button onClick={() => deleteTodo(item.id)} className="delbtn">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
