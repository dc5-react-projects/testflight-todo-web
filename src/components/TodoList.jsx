import React, { useState } from "react";
import TodoCard from "./TodoCard";
import Icon from "@mdi/react";
import { mdiDeleteCircle } from "@mdi/js";
import { mdiPlaylistEdit } from "@mdi/js";
import TodoInput from "./TodoInput";
import { ListIcon } from "@phosphor-icons/react";

function TodoList({ todos, toggleTodo, handleDeleteTodo, editTodo, addTodo }) {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [sortBy, setSortBy] = useState("active");

  let sortedTodos = todos;
  if (sortBy === "active") sortedTodos = todos.filter((todo) => !todo.isDone);

  if (sortBy === "alphabetical")
    sortedTodos = todos.slice().sort((a, b) => a.title.localeCompare(b.title));

  if (sortBy === "completed") sortedTodos = todos.filter((todo) => todo.isDone);

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
          {/* <div className="todo-button-icon">
            <ListIcon size={32} />
          </div> */}

          <div className="todo-filter">
            <select
              className="custom-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        {sortedTodos.map((todo, index) => (
          <TodoCard
            key={todo.id}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            toggleDelete={toggleDelete}
            toggleEdit={toggleEdit}
            handleDeleteTodo={handleDeleteTodo}
            editTodo={editTodo}
            setToggleEdit={setToggleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
