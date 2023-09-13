import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const typeAtom = atom({
  key: 'typeAtom',
  default: 'restaurant',
});

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
});

export const queryAtom = atom({
  key: 'queryAtom',
  default: {
    input: '',
    isSearch: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const locationAtom = atom({
  key: 'locationAtom',
  default: {
    lat: 0,
    lng: 0,
  },
});

export const placesAtom = atom({
  key: 'placesAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
