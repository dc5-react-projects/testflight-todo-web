import { useState } from "react";
import { PlusCircleIcon } from "@phosphor-icons/react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  function inputHandler(e) {
    setText(e.target.value);
  }

  function addTodoHandler() {
    if (text === "") return;
    console.log(text);
    addTodo(text);
    setText("");
  }
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={inputHandler}
      />
      <button className="add-button" onClick={addTodoHandler}>
        <PlusCircleIcon size={32} weight="fill" />
      </button>
    </div>
  );
}
