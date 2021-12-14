import { atom } from 'recoil';

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
