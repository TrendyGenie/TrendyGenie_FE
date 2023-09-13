import { GoogleMaps } from '@/components';
import DraggedComponent from '@/components/Interface/DraggedComponent';
import Reels from '@/components/Interface/Reels';

const Home = () => {
  return (
    <main>
      <GoogleMaps />
      <DraggedComponent />
      <Reels />
    </main>
  );
};

export default Home;
