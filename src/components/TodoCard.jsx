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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // borderStyle: "solid",
        // borderWidth: "2px",
        // borderColor: "white",
        borderRadius: "16px",

        height: "56px",
        padding: "12px  24px",
        marginBottom: "12px",
        backgroundColor: "#1c263b",

        // background: "white",
        // borderRadius: 12,
        // padding: 16,
        boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <div
          onClick={() => toggleTodo(todo.id)}
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#232042",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
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

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {toggleEdit && (
            <div
              onClick={() => {
                console.log("Edit Todo");
              }}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#232042",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              <Icon path={mdiCircleEditOutline} size={1} />
            </div>
          )}
          {toggleDelete && (
            <div
              onClick={() => {
                handleDeleteTodo(todo.id);
                console.log("Delete Todo");
              }}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#232042",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                cursor: "pointer",
              }}
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
