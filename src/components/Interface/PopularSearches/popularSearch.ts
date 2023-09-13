import restaurants from '../../../../public/images/restaurant.png';
import hotels from '../../../../public/images/hotels.png';
import bars from '../../../../public/images/bars.png';

export const data = [
  {
    id: 1,
    name: 'restaurant',
    image: restaurants,
  },
  {
    id: 2,
    name: 'lodging',
    image: hotels,
  },
  {
    id: 3,
    name: 'bar',
    image: bars,
  },
] as const;