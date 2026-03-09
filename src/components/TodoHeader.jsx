import React from "react";

function TodoHeader({ todos }) {
  const today = new Date();
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const totalCount = todos.length;
  const CompletedCount = todos.filter((todo) => todo.isDone).length;
  //   console.log(day);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        // borderStyle: "solid",
        // borderWidth: "2px",
        // borderColor: "white",
        // borderRadius: "16px",

        // width: "100%",
        // backgroundColor: "green",
        // color: "white",

        padding: "16px 26px",
      }}
    >
      <div>
        <p>{date}</p>
        <h2>{day}</h2>
      </div>
      <div
        style={{
          width: "52px",
          height: "52px",
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          borderStyle: "solid",
          borderWidth: "4px",
          borderColor: "#1c263b",
          borderRadius: "50px",
          padding: "12px",
        }}
      >
        <span
          style={{ display: "block", fontSize: "22px" }}
        >{`${CompletedCount} / ${totalCount}`}</span>
      </div>
    </div>
  );
}

export default TodoHeader;
