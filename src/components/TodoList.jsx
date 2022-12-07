import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList = ({ list, editListItem, removeListItem }) => {
  const listItems = list.map(({ id, text, done }) => (
    <TodoListItem
      key={id}
      id={id}
      text={text}
      done={done}
      editListItem={editListItem}
      removeListItem={removeListItem}
    />
  ));

  const result =
    listItems.length > 0 ? (
      <ul className="mt-4">{listItems}</ul>
    ) : (
      <h2 className="mt-10 font-medium text-2xl">
        Twoja lista zadań jest pusta 🙂
      </h2>
    );

  return result;
};

export default TodoList;
