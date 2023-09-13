import Image, { StaticImageData } from 'next/image';
import {
  VideoWrapper,
  ReelsInfo,
  ReelsInfoTitle,
  ReelsInfoSubtitle,
  Address,
  OpenTime,
  ContactCtn,
} from './styles';
import map_icon from '../../../../../public/svgs/map_icon.svg';
import ic_clock from '../../../../../public/svgs/ic_clock.svg';
import ic_phone from '../../../../../public/svgs/ic_phone.svg';

interface Props {
  image: StaticImageData;
  title: string;
}

const Video = ({ image, title }: Props) => {
  return (
    <VideoWrapper>
      <Image src={image} alt="Reel" fill />

      <ReelsInfo>
        <ReelsInfoTitle>{title}</ReelsInfoTitle>
        <ReelsInfoSubtitle>
          Cocktail Bar - from N 10,000 to N30,000
        </ReelsInfoSubtitle>
        <Address>
          <Image src={map_icon} alt="Map Icon" />
          16, white close .ikeja lagos
        </Address>
        <OpenTime>
          <Image src={ic_clock} alt="Clock Icon" />
          Opened: 24 hours
        </OpenTime>
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
      </ReelsInfo>
    </VideoWrapper>
  );
};

export default Video;
