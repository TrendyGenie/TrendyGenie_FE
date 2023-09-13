import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const reelsAtom = atom({
  key: 'reelsAtom',
  default: {
    isReelsOpen: false,
  },
  effects_UNSTABLE: [persistAtom],
});
