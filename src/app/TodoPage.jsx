import TodoList from "../components/TodoList";
import TodoHeader from "../components/TodoHeader";
import { useTodoContext } from "../context/useTodoContext";

function TodoPage() {
  const { todos, toggleTodo, handleDeleteTodo, addTodo, editTodo } =
    useTodoContext();

  return (
    <div className="container">
      <TodoHeader todos={todos} addTodo={addTodo} />
      <TodoList
        todos={todos}
        // isDone={isDone}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        handleDeleteTodo={handleDeleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoPage;
