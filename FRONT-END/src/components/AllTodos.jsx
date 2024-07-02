const AllTodos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1>Task - {todo.task}</h1>
            <h1>Time Duration - {todo.timeDuration}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default AllTodos;
