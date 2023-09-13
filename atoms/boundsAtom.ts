import { atom } from 'recoil';

export const boundsAtom = atom({
  key: 'boundsAtom',
  default: {
    lat: 0,
    lng: 0,
  },
});