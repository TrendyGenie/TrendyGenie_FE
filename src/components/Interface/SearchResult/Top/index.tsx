import Image from 'next/image';
import {
  FlexCtn,
  Top,
  ReelsInfo,
  ReelsInfoTitle,
  ReelsInfoSubtitle,
  Address,
  Distance,
  OpenTime,
  ContactCtn,
  RelativeCtn,
  Desc,
} from './styles';
import substitute_img from '../../../../../public/images/substitute_img.png';
import map_icon from '../../../../../public/svgs/map_colored.svg';
import ic_clock from '../../../../../public/svgs/clock-colored.svg';
import ic_phone from '../../../../../public/svgs/ic_phone.svg';

const Tops = ({ results, searchQuery }: { results: any; searchQuery: any }) => {
  return (
    <Top>
      {results?.photos?.length > 0 ? (
        <RelativeCtn>
          <Image
            src={`https://maps.googleapis.com/maps/api/place
/photo?maxwidth=400&photo_reference=${
              results.photos ? results.photos[0].photo_reference : ''
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
      <FlexCtn>
        <ReelsInfo>
          <ReelsInfoTitle>{results.name}</ReelsInfoTitle>
          <Desc>
            Lorem ipsum dolor sit amet, consectetu adipiscing elit. Fusce rutrum
            risus eget hendrerit porttitor. Praesent convallis condimentum
            sapien..
          </Desc>
          <ReelsInfoSubtitle>{searchQuery.input}</ReelsInfoSubtitle>
          <Address>
            <Image src={map_icon} alt="Map Icon" />
            {results.formatted_address}
          </Address>
          <Distance>6km Away</Distance>
          <OpenTime>
            <Image src={ic_clock} alt="Clock Icon" />
            Opened: 24 hours
          </OpenTime>
        </ReelsInfo>

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
      </FlexCtn>
    </Top>
  );
};

export default Tops;
