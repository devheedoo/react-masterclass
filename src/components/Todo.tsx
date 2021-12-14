import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ITodo, todosAtom } from '../atoms/todosAtom';

function Todo({ id, text, status }: ITodo) {
  const setTodos = useSetRecoilState(todosAtom);
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
      <button name={'todo'} onClick={handleClick} disabled={status === 'todo'}>
        TODO
      </button>
      <button
        name={'doing'}
        onClick={handleClick}
        disabled={status === 'doing'}
      >
        DOING
      </button>
      <button name={'done'} onClick={handleClick} disabled={status === 'done'}>
        DONE
      </button>
    </li>
  );
}

export default Todo;
