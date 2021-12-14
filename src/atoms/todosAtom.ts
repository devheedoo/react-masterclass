import { atom, selector } from 'recoil';

export interface ITodo {
  id: number; // using Date
  text: string;
  status: TodoStatus;
}

export enum TodoStatus {
  TODO = 'todo',
  DOING = 'doing',
  IN_REVIEW = 'in_review',
  DONE = 'done',
}

export const todosAtom = atom<ITodo[]>({
  key: 'todos',
  default: [],
});

export const statusAtom = atom<TodoStatus>({
  key: 'status',
  default: TodoStatus.TODO,
});

export const todosSelector = selector<ITodo[]>({
  key: 'todosSelector',
  get: ({ get }) => {
    const todos = get(todosAtom);
    const status = get(statusAtom);
    return todos.filter((todo) => todo.status === status);
  },
});
