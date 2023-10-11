'use client';
import Image from 'next/image';
import {
  Header,
  Title,
  Container,
  Card,
  Top,
  ReelsInfo,
  ReelsInfoTitle,
  ReelsInfoSubtitle,
  Address,
  Distance,
  OpenTime,
  ContactCtn,
  RelativeCtn,
} from './styles';
import substitute_img from '../../../../public/images/substitute_img.png';
import map_icon from '../../../../public/svgs/map_colored.svg';
import ic_clock from '../../../../public/svgs/clock-colored.svg';
import ic_phone from '../../../../public/svgs/ic_phone.svg';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { locationAtom, queryAtom } from '../../../../atoms/searchAtom';
import { boundsAtom } from '../../../../atoms/boundsAtom';

interface ViewSearchedListProps {
  places: any;
  expanded: boolean;
}

const ViewSearchedList: FC<ViewSearchedListProps> = ({ places, expanded }) => {
  const [query, setQuery] = useRecoilState(queryAtom);
  const [location, setLocation] = useRecoilState(locationAtom);
  const [, setBounds] = useRecoilState(boundsAtom);

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
    }
  };
  return (
    <>
      <Header>
        <Title>View List</Title>
        <button
          type="button"
          onClick={() => {
            setQuery({
              query: '',
              isSearch: false,
            });
            setBounds({
              lat: 0,
              lng: 0,
            });

            setTimeout(() => {
              getUserLocation();
            }, 1000);
          }}
        >
          Go Back
        </button>
      </Header>
      <Container className={expanded ? 'column' : ''}>
        {places.map((place: any) => (
          <Card key={place.place_id} href={`search-result/${place.place_id}`}>
            <Top>
              <ReelsInfo>
                <ReelsInfoTitle>{place.name}</ReelsInfoTitle>
                <ReelsInfoSubtitle>
                  Cocktail Bar - from N 10,000 to N30,000
                </ReelsInfoSubtitle>
                <Address>
                  <Image src={map_icon} alt="Map Icon" />
                  {place.formatted_address}
                </Address>
                <Distance>6km Away</Distance>
                <OpenTime>
                  <Image src={ic_clock} alt="Clock Icon" />
                  Opened: 24 hours
                </OpenTime>
              </ReelsInfo>
              {place?.photos?.length > 0 ? (
                <RelativeCtn>
                  <Image
                    src={`https://maps.googleapis.com/maps/api/place
/photo?maxwidth=400&photo_reference=${
                      place.photos ? place.photos[0].photo_reference : ''
                    }&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                    alt="image"
                    fill
                    placeholder="blur"
                    blurDataURL={substitute_img.src}
                  />
                </RelativeCtn>
              ) : (
                <RelativeCtn>
                  <Image src={substitute_img} alt="image" fill />
                </RelativeCtn>
              )}
            </Top>
            <ContactCtn>
              <button type="button">
                <Image src={ic_phone} alt="Phone Icon" />
                Call Business
              </button>
              <button type="button">
                <Image src={ic_phone} alt="Phone Icon" />
                Call TrendyGenie
              </button>
            </ContactCtn>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ViewSearchedList;
