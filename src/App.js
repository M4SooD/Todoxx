import { TodosProvider } from "./contexts/TodosContext";
import TodoxFooter from "./components/TodoxFooter/TodoxFooter";
import TodoxHeader from "./components/TodoxHeader/TodoxHeader";
import TodoxMain from "./components/TodoxMain/TodoxMain";

const App = () => {
  return (
    <TodosProvider>
      <div className="todoapp">
        <TodoxHeader />
        <TodoxMain />
        <TodoxFooter />
      </div>
    </TodosProvider>
  );
};

export default App;
