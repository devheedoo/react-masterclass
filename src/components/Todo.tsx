import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ITodo } from '../interfaces';
import { statusesAtom } from '../states/statusAtom';
import { todosAtom } from '../states/todosAtom';

function Todo({ id, text, status }: ITodo) {
  const setTodos = useSetRecoilState(todosAtom);
  const statuses = useRecoilValue(statusesAtom);
  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setTodos((todos) => {
      const currentIndex = todos.findIndex((todo) => todo.id === id);
      const newTodo = { id, text, status: name };
      return [
        ...todos.slice(0, currentIndex),
        newTodo,
        ...todos.slice(currentIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {statuses.map((s) => (
        <button name={s} onClick={handleClick} disabled={s === status}>
          {s}
        </button>
      ))}
    </li>
  );
}

export default Todo;
