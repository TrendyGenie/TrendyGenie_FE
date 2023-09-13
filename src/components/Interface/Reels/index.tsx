'use client';
import { useRecoilState } from 'recoil';
import Video from './Video';
import { reelsData } from './reelsData';
import { reelsAtom } from '../../../../atoms/reels';
import { ReelsWrapper, CloseButton } from './styles';
import Image from 'next/image';
import ic_back from '../../../../public/svgs/ic_back.svg';

const Reels = () => {
  const [isReelsOpen, setIsReelsOpen] = useRecoilState(reelsAtom);
  return (
    isReelsOpen.isReelsOpen && (
      <ReelsWrapper>
        <CloseButton
          onClick={() =>
            setIsReelsOpen({
              isReelsOpen: false,
            })
          }
        >
          <Image src={ic_back} alt="back" />
        </CloseButton>
        {reelsData.map((reel, index) => (
          <Video {...reel} key={index} />
        ))}
      </ReelsWrapper>
    )
  );
};

export default Reels;
