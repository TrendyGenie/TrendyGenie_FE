import { MarkerF } from '@react-google-maps/api';

const Markers = ({ geometry }: any) => {
  return (
    <MarkerF
      position={geometry.location}
      icon={{
        url: '/svgs/location_loading.svg',
        scaledSize: new window.google.maps.Size(30, 30),
      }}
    />
  );
};

export default Markers;
