import { atom } from 'recoil';
import { ITodo } from '../interfaces';

export const todosAtom = atom<ITodo[]>({
  key: 'todos',
  default: [],
});
