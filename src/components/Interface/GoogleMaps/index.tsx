'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useRecoilState } from 'recoil';
import { locationAtom } from '../../../../atoms/searchAtom';

// You can call getCenter() within an async function to get the center coordinates.

const containerStyle = {
  width: '100%',
  height: '100vh',
};

function GoogleMaps() {
  const [location, setLocation] =
    useRecoilState<google.maps.LatLngLiteral>(locationAtom);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // Replace with your Google Maps API key
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(
    (map: google.maps.Map | null) => {
      if (map) {
        setMap(map);
      }
    },
    [setMap]
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, [setMap]);

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

        if (location) {
          return location;
        }
      }
    };
    getUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location!} // Set the center to your desired static coordinates
      zoom={15}
      onLoad={onLoad as any}
      onUnmount={onUnmount}
    >
      <MarkerF position={location!} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
