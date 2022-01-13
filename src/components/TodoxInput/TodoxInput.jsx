import { useContext, useEffect, useRef, useState } from "react";
import { enterCode, escCode } from "../../helpers/keycodes";
import { TodosContext } from "../contexts/TodosContext";
const TodoxInput = ({ todo, isEditing, setEditingId }) => {
  const [, dispatch] = useContext(TodosContext);
  const [editText, setEditText] = useState(todo.text);

  const editingClass = isEditing ? "editing" : "";
  const completedClass = todo.isCompleted ? "completed" : "";

  const editInputEl = useRef(null);

  const setTodoEditingMode = () => {
    setEditingId(todo.id);
  };

  const toggleTodo = () => {
    dispatch({ type: "toggleTodo", payload: todo.id });
  };

  const removeTodo = () => {
    dispatch({ type: "removeTodo", payload: todo.id });
  };

  const changedEditInput = (e) => {
    setEditText(e.target.value);
  };

  const keyDownEditInput = (e) => {
    if (e.keyCode === enterCode) {
      dispatch({
        type: "changeTodo",
        payload: { id: todo.id, text: e.target.value },
      });
      setEditingId(null);
    }

    if (e.keyCode === escCode) {
      setEditText(todo.text);
      setEditingId(null);
    }
  };

  useEffect(() => {
    if (isEditing) {
      editInputEl.current.focus();
    }
  });

  return (
    <li className={`${editingClass} ${completedClass}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          value={todo.isCompleted}
          onChange={toggleTodo}
        />
        <label onDoubleClick={setTodoEditingMode}>{todo.text}</label>
        <button className="destroy" onClick={removeTodo}></button>
      </div>
      {isEditing && (
        <input
          ref={editInputEl}
          className="edit"
          value={editText}
          onChange={changedEditInput}
          onKeyDown={keyDownEditInput}
        />
      )}
    </li>
  );
};

export default TodoxInput;
