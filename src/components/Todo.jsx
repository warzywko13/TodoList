import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  /* Load data from localStorage */
  const getListFromLocalStorage = () => {
    const json = localStorage.getItem("TodoList");
    const TodoList = JSON.parse(json);
    if (TodoList) {
      return TodoList;
    } else {
      return [];
    }
  };

  const [list, setList] = useState(getListFromLocalStorage());

  /* Save data to localStorage */
  useEffect(() => {
    const json = JSON.stringify(list);
    localStorage.setItem("TodoList", json);
  }, [list]);

  const addListItem = (newText) => {
    const newItem = {
      id: uuid().slice(0, 8),
      text: newText,
      done: false,
    };

    setList([newItem, ...list]);
  };

  const editListItem = (id, text, done) => {
    const editItem = {
      id,
      text,
      done,
    };

    setList(
      list.map((item) => {
        if (item.id === id) {
          return editItem;
        } else {
          return item;
        }
      })
    );
  };

  const removeListItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className="container max-w-lg mx-auto">
      <h1 className="text-center text-4xl font-bold mt-4">Todo List</h1>
      <TodoForm addListItem={addListItem} />
      <TodoList
        list={list}
        removeListItem={removeListItem}
        editListItem={editListItem}
      />
    </div>
  );
};

export default Todo;
