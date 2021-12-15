import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  DEFAULT_STATUSES,
  statusAtom,
  statusesAtom,
} from '../states/statusAtom';
import { todosAtom } from '../states/todosAtom';
import { todosSelector } from '../states/todosSelector';
import CreateStatus from './CreateStatus';
import CreateTodo from './CreateTodo';
import ClearLocalStorage from './ClearLocalStorage';
import Todo from './Todo';

function TodoList() {
  const todos = useRecoilValue(todosSelector);
  const setTodos = useSetRecoilState(todosAtom);
  const [statuses, setStatuses] = useRecoilState(statusesAtom);

  const [status, setStatus] = useRecoilState(statusAtom);
  const handleInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setStatus(value);
  };

  const loadSavedTodos = async () => {
    const savedTodos = JSON.parse(window.localStorage.getItem('todos') ?? '[]');
    const savedStatuses = JSON.parse(
      window.localStorage.getItem('statuses') ?? '[]'
    );
    console.log('savedTodos:', savedTodos);
    console.log('statuses:', savedStatuses);
    setTodos(savedTodos);
    savedStatuses.length > 0
      ? setStatuses(savedStatuses)
      : setStatuses(DEFAULT_STATUSES);
  };

  useEffect(() => {
    loadSavedTodos();
  }, []);

  return (
    <div>
      <h1>TODOLIST</h1>
      <ClearLocalStorage />
      <CreateStatus />
      <select onInput={handleInput} value={status}>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
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
