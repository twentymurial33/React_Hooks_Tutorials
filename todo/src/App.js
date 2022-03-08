import "./App.css";
import React, { useState } from "react";

function Todo({ todo, index }) {
  return <div className="Todo">{todo.text}</div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue(" ");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add todos....."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Washing laundry",
      isCompleted: false,
    },
    {
      text: "Meet friends",
      isCompleted: true,
    },
    {
      text: "Build really cool apps",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const NewTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
