import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { statusAtom, todosSelector, TodoStatus } from '../atoms/todosAtom';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function TodoList() {
  const todos = useRecoilValue(todosSelector);
  const setStatus = useSetRecoilState(statusAtom);
  const handleInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setStatus(value as TodoStatus);
  };

  return (
    <div>
      <h1>TODOLIST</h1>
      <select onInput={handleInput}>
        {Object.entries(TodoStatus).map(([key, value]) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </select>
      <CreateTodo />
      <div style={{ marginTop: 10 }}>
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
