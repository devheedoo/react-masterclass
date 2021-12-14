import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ITodo, todosAtom, TodoStatus } from '../atoms/todosAtom';

function Todo({ id, text, status }: ITodo) {
  const setTodos = useSetRecoilState(todosAtom);
  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setTodos((todos) => {
      const currentIndex = todos.findIndex((todo) => todo.id === id);
      const newTodo = { id, text, status: name as TodoStatus };
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
      <button
        name={TodoStatus.TODO}
        onClick={handleClick}
        disabled={status === TodoStatus.TODO}
      >
        TODO
      </button>
      <button
        name={TodoStatus.DOING}
        onClick={handleClick}
        disabled={status === TodoStatus.DOING}
      >
        DOING
      </button>
      <button
        name={TodoStatus.IN_REVIEW}
        onClick={handleClick}
        disabled={status === TodoStatus.IN_REVIEW}
      >
        IN_REVIEW
      </button>
      <button
        name={TodoStatus.DONE}
        onClick={handleClick}
        disabled={status === TodoStatus.DONE}
      >
        DONE
      </button>
    </li>
  );
}

export default Todo;
