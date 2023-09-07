import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  locationAtom,
  placesAtom,
  queryAtom,
  typeAtom,
} from '../atoms/searchAtom';

export const useGooglePlace = () => {
  const query = useRecoilValue(queryAtom);
  const type = useRecoilValue(typeAtom);
  const locations = useRecoilValue(locationAtom);
  const [_, setPlaces] = useRecoilState(placesAtom);
  const radius = 1500;
  const getPlaces = async () => {
    try {
      const response = await axios.post('/api/google-place', {
        query,
        type,
        radius,
        location: locations,
      });
      const data = await response.data.data;
      setPlaces(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return { getPlaces };
};
