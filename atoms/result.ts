import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const resultState = atom({
  key: 'resultState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
