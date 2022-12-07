import React, { useState, useEffect, useCallback } from "react";

const TodoForm = ({ addListItem }) => {
  const [value, setValue] = useState("");

  const handleClick = useCallback(() => {
    addListItem(value);
    setValue("");
  }, [addListItem, value]);

  const handleTextValue = (e) => setValue(e.target.value);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleClick();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [handleClick]);

  return (
    <div className="flex">
      <input
        className="mt-4 form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="text"
        value={value}
        placeholder="Twoje plany na dziś..."
        onChange={handleTextValue}
      />
      <button
        className="mt-4 ml-1 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleClick}
      >
        Dodaj
      </button>
    </div>
  );
};

export default TodoForm;
