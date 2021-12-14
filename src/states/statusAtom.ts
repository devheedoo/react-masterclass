import { atom } from 'recoil';

export const DEFAULT_STATUSES = ['TODO', 'DOING', 'DONE'];

export const statusAtom = atom<string>({
  key: 'status',
  default: DEFAULT_STATUSES[0],
});

export const statusesAtom = atom<string[]>({
  key: 'statuses',
  default: DEFAULT_STATUSES,
});
