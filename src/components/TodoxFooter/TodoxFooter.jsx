import { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import "./TodoxFooter.css";
const TodoxFooter = () => {
  const [todosState, dispatch] = useContext(TodosContext);

  const activeCount = todosState.todos.filter(
    (todo) => !todo.isCompleted
  ).length;

  const noTodosClass = todosState.todos.length === 0 ? "hidden" : "";
  const itemsLeftText = ` task${activeCount !== 1 ? "s" : ""} left`;

  const getSelectedClass = (filterName) => {
    return todosState.filter === filterName ? "selected" : "";
  };

  const changeFilter = (e, filterName) => {
    e.preventDefault();
    dispatch({ type: "changeFilter", payload: filterName });
  };

  return (
    <footer className={`footer ${noTodosClass}`}>
      <span className="todo-count">
        <strong>{activeCount}</strong>
        {itemsLeftText}
      </span>
      <ul className="filters">
        <li>
          <a
            href="/"
            className={getSelectedClass("all")}
            onClick={(e) => changeFilter(e, "all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("active")}
            onClick={(e) => changeFilter(e, "active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("completed")}
            onClick={(e) => changeFilter(e, "completed")}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default TodoxFooter;
