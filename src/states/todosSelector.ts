import { selector } from 'recoil';
import { ITodo } from '../interfaces';
import { statusAtom } from './statusAtom';
import { todosAtom } from './todosAtom';

export const todosSelector = selector<ITodo[]>({
  key: 'todosSelector',
  get: ({ get }) => {
    const todos = get(todosAtom);
    const status = get(statusAtom);
    return todos.filter((todo) => todo.status === status);
  },
});
