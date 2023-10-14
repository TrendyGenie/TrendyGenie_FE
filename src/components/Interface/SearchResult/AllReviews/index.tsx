import Image from 'next/image';
import avatar from '../../../../../public/images/avatar.png';
import review_image from '../../../../../public/images/review_image.png';
import {
  Wrapper,
  Header,
  Reviews,
  FlexTop,
  Name,
  Username,
  Time,
  ReviewContent,
} from './styles';

const AllReviews = () => {
  return (
    <Wrapper>
      <Header>All Reviews</Header>
      <Reviews>
        <FlexTop>
          <Image src={avatar} alt="avatar" width={50} height={50} />
          <Name>User Name</Name>
          <Username>@username</Username>
          <Time>-5 days ago</Time>
        </FlexTop>
        <ReviewContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rutrum risus eget hendrerit porttitor. Praesent convallis
            condimentum sapien. Donec interdum sollicitudin ex et iaculis. Proin
            dignissim lacinia enim nec maximus. Suspendisse potenti. Nam eu
            lacinia sapien. Phasellus fringilla odio a fermentum ornare. Nulla
            iaculis nibh ut rhoncus fringilla. Phasellus vitae fermentum velit.
          </p>
          <Image
            src={review_image}
            alt="review_image"
            width={500}
            height={500}
          />
        </ReviewContent>
      </Reviews>
      <Reviews>
        <FlexTop>
          <Image src={avatar} alt="avatar" width={50} height={50} />
          <Name>User Name</Name>
          <Username>@username</Username>
          <Time>-5 days ago</Time>
        </FlexTop>
        <ReviewContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rutrum risus eget hendrerit porttitor. Praesent convallis
            condimentum sapien. Donec interdum sollicitudin ex et iaculis. Proin
            dignissim lacinia enim nec maximus. Suspendisse potenti. Nam eu
            lacinia sapien. Phasellus fringilla odio a fermentum ornare. Nulla
            iaculis nibh ut rhoncus fringilla. Phasellus vitae fermentum velit.
          </p>
          <Image
            src={review_image}
            alt="review_image"
            width={500}
            height={500}
          />
        </ReviewContent>
      </Reviews>
    </Wrapper>
  );
};

export default AllReviews;
