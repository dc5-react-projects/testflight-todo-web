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

  return (
    <div>
      <div className="header-container">
        <div className="header-date-day-wrapper">
          <p className="header-date">{date}</p>
          <h2 className="header-day">{day}</h2>
        </div>
        <div className="header-progress">
          <span className="progress-stats">{`${CompletedCount} / ${totalCount}`}</span>
        </div>
      </div>
    </div>
  );
}

export default TodoHeader;
