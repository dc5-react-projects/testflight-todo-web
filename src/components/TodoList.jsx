import React, { useState } from "react";
import TodoCard from "./TodoCard";
import Icon from "@mdi/react";
import { mdiDeleteCircle } from "@mdi/js";
import { mdiPlaylistEdit } from "@mdi/js";
import { PlusCircleIcon } from "@phosphor-icons/react";
function TodoList({ todos, toggleTodo, addTodo, handleDeleteTodo }) {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  function addTodoHandler() {
    addTodo();
  }

  function handleToggleDelete() {
    setToggleDelete((prev) => !prev);
  }
  function handleToggleEdit() {
    setToggleEdit((prev) => !prev);
  }

  return (
    <div
      style={{
        width: "100%",
        // height: "70vh",
        padding: "16px",

        // borderStyle: "solid",
        // borderWidth: "2px",
        // borderColor: "white",
        // borderRadius: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",

          //   borderStyle: "solid",
          //   borderWidth: "2px",
          //   borderColor: "white",
          //   borderRadius: "16px",
        }}
      >
        <h2>ToDo</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div onClick={handleToggleEdit} style={{ cursor: "pointer" }}>
            <Icon
              path={mdiPlaylistEdit}
              size={1.5}
              style={{ marginRight: "12px" }}
            />
          </div>
          <div onClick={handleToggleDelete} style={{ cursor: "pointer" }}>
            <Icon path={mdiDeleteCircle} size={1.5} />
          </div>
          <div onClick={addTodoHandler} style={{ cursor: "pointer" }}>
            <PlusCircleIcon size={32} />
          </div>
        </div>
      </div>
      <div
        style={
          {
            //   borderStyle: "solid",
            //   borderWidth: "2px",
            //   borderColor: "white",
            //   borderRadius: "16px",
          }
        }
      >
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            // isDone={isDone}
            toggleTodo={toggleTodo}
            toggleDelete={toggleDelete}
            toggleEdit={toggleEdit}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
