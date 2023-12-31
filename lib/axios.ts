import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  loadingAtom,
  locationAtom,
  placesAtom,
  queryAtom,
  typeAtom,
} from '../atoms/searchAtom';
import { boundsAtom } from '../atoms/boundsAtom';

export const useGooglePlace = () => {
  const query = useRecoilValue(queryAtom);
  const type = useRecoilValue(typeAtom);
  const locations = useRecoilValue(locationAtom);
  const bounds = useRecoilValue(boundsAtom);
  const [, setPlaces] = useRecoilState(placesAtom);
  const [, setLoading] = useRecoilState(loadingAtom);
  const radius = 1500;
  const getPlaces = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/google-place', {
        query: query.input,
        type,
        radius,
        location: bounds.lat !== 0 && bounds.lng !== 0 ? bounds : locations,
      });
      const data = await response.data.data;
      if (data) {
        setPlaces(data.results);
        setLoading(false);
      } else {
        setPlaces([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return { getPlaces };
};
