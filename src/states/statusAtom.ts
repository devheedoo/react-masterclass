import { atom } from 'recoil';

export const statusAtom = atom<string>({
  key: 'status',
  default: 'todo',
});

export const statusesAtom = atom<string[]>({
  key: 'statuses',
  default: ['todo', 'doing', 'done'],
});
