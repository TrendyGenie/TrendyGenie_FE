'use client';
import { GoogleMaps } from '@/components';
import DraggedComponent from '@/components/Interface/DraggedComponent';
import Reels from '@/components/Interface/Reels';
import { useEffect } from 'react';
import { useGooglePlace } from '../../lib/axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { locationAtom } from '../../atoms/searchAtom';
import { boundsAtom } from '../../atoms/boundsAtom';

const Home = () => {
  const { getPlaces } = useGooglePlace();
  const [location, setLocation] =
    useRecoilState<google.maps.LatLngLiteral>(locationAtom);
  const bounds = useRecoilValue(boundsAtom);
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setLocation({ lat, lng });
          },

          (error) => {
            console.log(error);
          }
        );

        if (location.lat !== 0 && location.lng !== 0) {
          return location;
        }
      }
    };
    getUserLocation();
  }, [location, setLocation]);

  useEffect(() => {
    // getPlace function should run after the location is set
    if (location.lat !== 0 && location.lng !== 0) {
      getPlaces();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.lat, location.lng]);
  return (
    <main>
      <GoogleMaps />
      <DraggedComponent />
      <Reels />
    </main>
  );
};

export default Home;
