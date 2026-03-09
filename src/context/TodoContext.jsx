/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

// 1. Create Context
export const TodoContext = createContext();

// 2. Provider Component
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: "Build todo UI", isDone: false },
    { id: 2, title: "Check done todo", isDone: false },
    { id: 3, title: "Add todo", isDone: false },
    { id: 4, title: "Delete todo", isDone: false },
    { id: 5, title: "Edit todo", isDone: false },
  ]);

  function addTodo(title) {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        title: title,
        isDone: false,
      },
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

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, handleDeleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
