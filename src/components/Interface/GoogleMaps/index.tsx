'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { locationAtom, placesAtom } from '../../../../atoms/searchAtom';
import { debounce } from '../../../../lib/debounce';
import { boundsAtom } from '../../../../atoms/boundsAtom';
import Markers from '../Markers';

// You can call getCenter() within an async function to get the center coordinates.

const containerStyle = {
  width: '100%',
  height: '100vh',
};

function GoogleMaps() {
  const places = useRecoilValue(placesAtom);
  const [location] = useRecoilState<google.maps.LatLngLiteral>(locationAtom);
  const [, setBounds] = useRecoilState(boundsAtom);
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

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location!} // Set the center to your desired static coordinates
      zoom={15}
      onLoad={onLoad as any}
      onUnmount={onUnmount}
      onCenterChanged={() => {
        if (map) {
          const center = map.getCenter() as google.maps.LatLng;

          const debounced = debounce(() => {
            setBounds({
              lat: center.lat(),
              lng: center.lng(),
            });
          }, 1500);

          debounced();
        }
      }}
    >
      {places.map((place: any) => (
        <Markers key={place.place_id} {...place} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
