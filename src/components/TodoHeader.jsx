import React from "react";
import TodoInput from "./TodoInput";

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
  const progress = totalCount === 0 ? 0 : (CompletedCount / totalCount) * 100;
  return (
    <div>
      <div className="header-container">
        <div className="header-date-day-wrapper">
          <p className="header-date">{date}</p>
          <h2 className="header-day">{day}</h2>
        </div>
        <div className="header-progress">
          <ProgressCircle progress={progress} />
          <span className="progress-stats">{`${CompletedCount} / ${totalCount}`}</span>
        </div>
      </div>
      {/* <TodoInput /> */}
    </div>
  );
}

export default TodoHeader;

function ProgressCircle({ progress }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="120" height="120">
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#1c263b"
        strokeWidth="8"
        fill="none"
      />

      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#9c45b4"
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
}
