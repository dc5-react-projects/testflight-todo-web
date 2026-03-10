import React from "react";
import { CheckCircle, XCircle, Circle } from "@phosphor-icons/react";
import Icon from "@mdi/react";
import { mdiCircleEditOutline } from "@mdi/js";

function TodoCard({
  todo,
  toggleTodo,
  toggleDelete,
  toggleEdit,
  handleDeleteTodo,
}) {
  return (
    <div className="todo-card-container">
      <div className="todo-card">
        <div className="todo-card-icon" onClick={() => toggleTodo(todo.id)}>
          {todo.isDone ? (
            <CheckCircle
              size={32}
              style={{ display: "block", color: "#9c45b4" }}
            />
          ) : (
            <Circle size={32} />
          )}
        </div>
        <p>{todo.title}</p>
      </div>

      <div className="todo-icon-container">
        <div className="todo-icon-wrapper" s>
          {toggleEdit && (
            <div
              className="todo-card-icon"
              onClick={() => {
                console.log("Edit Todo");
              }}
            >
              <Icon path={mdiCircleEditOutline} size={1} />
            </div>
          )}
          {toggleDelete && (
            <div
              onClick={() => {
                handleDeleteTodo(todo.id);
              }}
              className="todo-card-icon"
            >
              <XCircle
                size={32}
                style={{ display: "block", color: "#d490e6" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
