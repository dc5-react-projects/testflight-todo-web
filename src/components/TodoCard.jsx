import {
  CheckCircle,
  XCircle,
  Circle,
  CheckFatIcon,
} from "@phosphor-icons/react";
import Icon from "@mdi/react";
import { mdiCircleEditOutline } from "@mdi/js";
import { useState } from "react";

function TodoCard({
  todo,
  toggleTodo,
  toggleDelete,
  toggleEdit,
  handleDeleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [editText, setEditText] = useState(todo.title);
  function editTodoHandler(id) {
    editTodo(id, editText);
    setIsEditing(false);
  }
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
        {isEditing ? (
          <div className="todo-card-input-container">
            <input
              className="todo-card-input"
              autoFocus
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />

            <div
              className="todo-card-icon"
              onClick={() => editTodoHandler(todo.id)}
            >
              <CheckFatIcon size={24} weight="fill" />
            </div>
          </div>
        ) : (
          <p>{todo.title}</p>
        )}
      </div>

      <div className="todo-icon-container">
        <div className="todo-icon-wrapper">
          {toggleEdit && (
            <div className="todo-card-icon" onClick={() => setIsEditing(true)}>
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
