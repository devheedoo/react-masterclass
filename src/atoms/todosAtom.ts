import { atom, selector } from 'recoil';

export interface ITodo {
  id: number; // using Date
  text: string;
  status: string;
}

export const todosAtom = atom<ITodo[]>({
  key: 'todos',
  default: [],
});

export const statusAtom = atom<string>({
  key: 'status',
  default: 'todo',
});

export const todosSelector = selector<ITodo[]>({
  key: 'todosSelector',
  get: ({ get }) => {
    const todos = get(todosAtom);
    const status = get(statusAtom);
    return todos.filter((todo) => todo.status === status);
  },
});
