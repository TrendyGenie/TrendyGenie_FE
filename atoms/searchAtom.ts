import { atom } from 'recoil';

export const typeAtom = atom({
  key: 'typeAtom',
  default: 'restaurant',
});

export const radiusAtom = atom({
  key: 'radiusAtom',
  default: 1500,
});

export const queryAtom = atom({
  key: 'queryAtom',
  default: '',
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
});