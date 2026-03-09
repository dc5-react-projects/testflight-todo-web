// import "./App.css";
import TodoPage from "./app/TodoPage";
import { TodoProvider } from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  );
}

export default App;
