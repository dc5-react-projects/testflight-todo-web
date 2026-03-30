import React, { useEffect } from "react";
import { useState } from "react";
import TodoInput from "./TodoInput";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
function TodoHeader({ todos }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");

    if (saved) return saved === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

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
      <button className="theme-btn" onClick={toggleTheme}>
        {isDark ? <SunIcon size={24} /> : <MoonIcon size={24} fill="#2f2f2c" />}
      </button>
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
        stroke="#eda0ff"
        strokeWidth="8"
        fill="none"
      />

      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#5a4fff"
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
