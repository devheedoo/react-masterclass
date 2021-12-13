import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTodoError("");
    setTodo(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length <= 10) {
      return setTodoError("todo should be longer than 10");
    }
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Add a todo" />
        <button>add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
}

export default TodoList;
