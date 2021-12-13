import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Add a todo" />
        <button>add</button>
      </form>
    </div>
  );
}

export default TodoList;
