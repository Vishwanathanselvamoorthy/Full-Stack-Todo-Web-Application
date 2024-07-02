import { useRef, useState } from "react";

const CreateTodo = (props) => {
  const [task, setTask] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  //   const task = useRef(null);
  //   const timeDuration = useRef(null);
  return (
    <div>
      <input
        // ref={task}
        type="text"
        placeholder="Enter Your Task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        // ref={timeDuration}
        type="text"
        placeholder="Enter The Time Duration"
        onChange={(e) => {
          setTimeDuration(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:5000/todos", {
            method: "POST",
            body: JSON.stringify({
              task: task,
              timeDuration: timeDuration,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            console.log(await res);
            alert(json.message);
            if (res.ok) {
              props.setTodos([
                ...props.todos,
                {
                  task: task,
                  timeDuration: timeDuration,
                },
              ]);
            }
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
