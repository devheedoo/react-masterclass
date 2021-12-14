import { atom } from 'recoil';

export const statusAtom = atom<string>({
  key: 'status',
  default: 'todo',
});
