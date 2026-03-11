import React, { useState } from "react";
import TodoCard from "./TodoCard";
import Icon from "@mdi/react";
import { mdiDeleteCircle } from "@mdi/js";
import { mdiPlaylistEdit } from "@mdi/js";
import TodoInput from "./TodoInput";

function TodoList({ todos, toggleTodo, handleDeleteTodo, editTodo, addTodo }) {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);

  function handleToggleDelete() {
    setToggleDelete((prev) => !prev);
  }
  function handleToggleEdit() {
    setToggleEdit((prev) => !prev);
  }

  return (
    <div className="todo-container">
      <div className="todo-list">
        <h2 className="todo-title">ToDo</h2>
        <TodoInput addTodo={addTodo} />

        <div className="todo-button-wrapper">
          <div className="todo-button-icon" onClick={handleToggleEdit}>
            <Icon path={mdiPlaylistEdit} size={1.3} />
          </div>
          <div className="todo-button-icon" onClick={handleToggleDelete}>
            <Icon path={mdiDeleteCircle} size={1.3} />
          </div>
        </div>
      </div>
      <div>
        {todos.map((todo, index) => (
          <TodoCard
            key={todo.id}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            toggleDelete={toggleDelete}
            toggleEdit={toggleEdit}
            handleDeleteTodo={handleDeleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
