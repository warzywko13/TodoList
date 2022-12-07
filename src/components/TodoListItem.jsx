import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoListItem = ({ id, text, done, removeListItem, editListItem }) => {
  const handleRemoveButtonClick = (id) => removeListItem(id);
  const handleEditDoneStatus = (id, text, done) => {
    editListItem(id, text, !done);
  };

  return (
    <li key={id} className="border border-gray-200 w-full mt-1 p-2">
      <input
        className="mr-3 form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
        type="checkbox"
        value=""
        checked={done}
        onChange={() => handleEditDoneStatus(id, text, done)}
      />
      <span className={done ? "line-through font-bold" : null}>{text}</span>
      <div className="block float-right">
        <FontAwesomeIcon
          className="mr-2 text-2xl cursor-pointer hover:text-blue-600"
          onClick={() => handleRemoveButtonClick(id)}
          icon={faTrash}
        ></FontAwesomeIcon>
        {/* <FontAwesomeIcon 
          className="ml-3 text-2xl cursor-pointer hover:text-blue-600"
          icon={faPenToSquare}
        ></FontAwesomeIcon>*/}
      </div>
    </li>
  );
};

export default TodoListItem;
