import { useEffect, useState } from "react";
import AllTodos from "./components/AllTodos";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodoApi();
  }, []);
  async function fetchTodoApi() {
    const data = await fetch("http://localhost:5000/todos");
    const json = await data.json();
    setTodos(json.allTodos);
  }


  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <AllTodos todos={todos} />
    </div>
  );
}

export default App;
