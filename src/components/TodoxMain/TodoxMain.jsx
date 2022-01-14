import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import TodoxInput from "../TodoxInput/TodoxInput";
import "./TodoxMain.css";
const TodoxMain = () => {
  const [todosState, dispatch] = useContext(TodosContext);
  const [editingId, setEditingId] = useState(null);

  const noTodosClass = todosState.todos.length === 0 ? "hidden" : "";

  const getVisibleTodos = () => {
    if (todosState.filter === "active") {
      return todosState.todos.filter((todo) => !todo.isCompleted);
    } else if (todosState.filter === "completed") {
      return todosState.todos.filter((todo) => todo.isCompleted);
    }
    return todosState.todos;
  };

  const isAllTodosSelected = todosState.todos.every((todo) => todo.isCompleted);
  const onToggleAllTodos = (e) => {
    dispatch({ type: "toggleAll", payload: e.target.checked });
  };

  const visibileTodos = getVisibleTodos();

  return (
    <section className={`main ${noTodosClass}`}>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isAllTodosSelected}
        onChange={onToggleAllTodos}
      />
      <label htmlFor="toggle-all">Mark all as completed</label>
      <ul className="todo-list">
        {visibileTodos.map((todo) => (
          <TodoxInput
            key={todo.id}
            todo={todo}
            isEditing={editingId === todo.id}
            setEditingId={setEditingId}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoxMain;
