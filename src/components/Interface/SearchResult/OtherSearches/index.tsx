'use client';
import {
  Card,
  CardImage,
  CardTitle,
  CardsContainer,
  Header,
  Wrapper,
  RelativeCtn,
} from './styles';
import substitute_img from '../../../../../public/images/substitute_img.png';
import map_icon from '../../../../../public/svgs/map_colored.svg';
import { Address, Distance, ReelsInfoSubtitle } from '../Top/styles';
import Image from 'next/image';
import { resultState } from '../../../../../atoms/result';
import { useRecoilState } from 'recoil';

const OtherSearches = ({
  places,
  id,
  searchQuery: { input },
}: {
  places: any;
  id: string;
  searchQuery: { input: string };
}) => {
  const [, setResults] = useRecoilState(resultState);
  return (
    <Wrapper>
      <Header>People Also search for</Header>
      <CardsContainer>
        {places.filter((place: any) => place.place_id !== id).length === 0 && (
          <p>No other places found</p>
        )}
        {places
          .filter((place: any) => place.place_id !== id)
          .map((place: any) => (
            <Card
              key={place.place_id}
              href={`/search-result/${place.place_id}`}
              onClick={() => setResults(place)}
            >
              {place?.photos?.length > 0 ? (
                <RelativeCtn>
                  <CardImage
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
                  <CardImage src={substitute_img} alt="image" fill />
                </RelativeCtn>
              )}
              <CardTitle>{place.name}</CardTitle>
              <ReelsInfoSubtitle>{input}</ReelsInfoSubtitle>
              <Address>
                <Image src={map_icon} alt="Map Icon" />
                {place.formatted_address}
              </Address>
              <Distance>6km Away</Distance>
            </Card>
          ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default OtherSearches;
