/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

// import { lightTheme, darkTheme } from "../utils/colors";
// 1. Create Context
export const TodoContext = createContext();

// 2. Provider Component
export function TodoProvider({ children }) {
  // const [todos, setTodos] = useState([
  //   { id: 1, title: "Build todo UI", isDone: false },
  //   { id: 2, title: "Check done todo", isDone: false },
  //   { id: 3, title: "Add todo", isDone: false },
  //   { id: 4, title: "Delete todo", isDone: false },
  //   { id: 5, title: "Edit todo", isDone: false },
  // ]);
  // const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      const parsed = JSON.parse(savedTodos);
      return Array.isArray(parsed) ? parsed : [];
      // return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((prev) => [
      {
        id: Math.random().toString(),
        title: title,
        isDone: false,
      },
      ...prev,
    ]);
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  }
  function handleDeleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, newText) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: newText } : todo)),
    );
  }

  // const theme = isDark ? darkTheme : lightTheme;

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, handleDeleteTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
