import { GoogleMaps } from '@/components';
import DraggedComponent from '@/components/Interface/DraggedComponent';
const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const googlePlaceApiKkey = process.env.GOOGLE_MAPS_API_KEY;

const query = 'restaurants around';
const type = 'restaurant';
const location = { lat: 40.7128, lng: 74.006 };
const radius = 1000;

const Home = async () => {
  const response = await fetch('http://localhost:3000/api/google-place', {
    method: 'POST',
    body: JSON.stringify({
      query,
      type,
      location,
      radius,
      googlePlaceApiKkey,
    }),
  });
  const data = await response.json();
  console.log({
    data,
  });

  return (
    <main>
      <GoogleMaps />
      <DraggedComponent />
    </main>
  );
};

export default Home;
