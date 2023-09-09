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

interface Props {
  type: string;
  setType: (type: string) => void;
  places: any;
  loading: boolean;
}

const truncate = (str: string, maxLength: number) => {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};

const DisplayNearbyPlace: FC<Props> = ({ type, setType, places, loading }) => {
  return (
    <NearbyPlaceWrapper>
      <Tabs>
        {data.map((item, index) => (
          <Tab
            className={type === item.name ? 'active' : ''}
            onClick={() => {
              if (type === item.name) {
                return;
              } else {
                setType(item.name);
              }
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
                  placeholder="blur"
                  blurDataURL={substitute_img.src}
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
