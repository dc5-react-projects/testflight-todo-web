import TodoList from "../components/TodoList";
import TodoHeader from "../components/TodoHeader";

import { useTodoContext } from "../context/useTodoContext";
function TodoPage() {
  const { todos, toggleTodo, handleDeleteTodo, addTodo } = useTodoContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        width: "90%",
        padding: "24px",
      }}
    >
      <TodoHeader todos={todos} />
      <TodoList
        todos={todos}
        // isDone={isDone}
        toggleTodo={toggleTodo}
        handleDeleteTodo={handleDeleteTodo}
        addTodo={addTodo}
      />
    </div>
  );
}

export default TodoPage;
