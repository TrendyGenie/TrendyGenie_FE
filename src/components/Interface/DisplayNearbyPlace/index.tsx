import Image from 'next/image';
import { data } from '../DraggedComponent/popularSearch';
import {
  NearbyPlaceWrapper,
  Tabs,
  Tab,
  DisplayContent,
  Content,
  Text,
} from './styles';
import { FC } from 'react';
import substitute_img from '../../../../public/images/substitute_img.png';
import Spinner from '../Spinner';
import { useGooglePlace } from '../../../../lib/axios';
import { debounce } from '../../../../lib/debounce';

interface Props {
  setType: (type: string) => void;
  places: any;
  loading: boolean;
}

const truncate = (str: string, maxLength: number) => {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};

const DisplayNearbyPlace: FC<Props> = ({ setType, places, loading }) => {
  const { getPlaces } = useGooglePlace();
  return (
    <NearbyPlaceWrapper>
      <Tabs>
        {data.map((item, index) => (
          <Tab
            onClick={() => {
              setType(item.name);
              const debouncedFunc = debounce(getPlaces, 1500);
              debouncedFunc();
            }}
            key={index}
          >
            {item.name === 'lodging' ? 'Hotel' : item.name}
          </Tab>
        ))}
      </Tabs>
      {loading ? (
        <Spinner />
      ) : (
        <DisplayContent>
          {places?.map((item: any, index: number) => (
            <Content key={index}>
              {item?.photos?.length > 0 ? (
                <Image
                  src={`https://maps.googleapis.com/maps/api/place
/photo?maxwidth=400&photo_reference=${
                    item.photos ? item.photos[0].photo_reference : ''
                  }&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                  alt="image"
                  width={120}
                  height={120}
                />
              ) : (
                <Image
                  src={substitute_img}
                  alt="image"
                  width={120}
                  height={120}
                />
              )}
              <Text>{truncate(item.name, 10)}</Text>
            </Content>
          ))}
        </DisplayContent>
      )}
    </NearbyPlaceWrapper>
  );
};

export default DisplayNearbyPlace;
