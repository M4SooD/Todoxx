import { useContext, useState } from "react";
import { enterCode } from "../../helpers/keycodes";
import { TodosContext } from "../contexts/TodosContext";
import "./TodoxHeader.css";
const TodoxHeader = () => {
  const [text, setText] = useState("");
  const [, dispatch] = useContext(TodosContext);

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  const keydownTextHandler = (e) => {
    const isEnter = e.keyCode === enterCode;
    const newText = text.trim();
    const isTextPresent = newText.length > 0;
    if (isEnter && isTextPresent) {
      dispatch({ type: "addTask", payload: newText });
      setText("");
    }
  };

  return (
    <header className="header">
      <h1>Todox</h1>
      <input
        className="new-todo"
        placeholder="What need to be done"
        autoFocus
        value={text}
        onChange={changeTextHandler}
        onKeyDown={keydownTextHandler}
      />
    </header>
  );
};

export default TodoxHeader;
