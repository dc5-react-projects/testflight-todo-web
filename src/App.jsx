import TodoPage from "./app/TodoPage";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";
function App() {
  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  );
}

export default App;
