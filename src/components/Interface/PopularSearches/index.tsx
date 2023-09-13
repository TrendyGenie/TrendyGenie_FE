import Image from 'next/image';
import { data as Data } from './popularSearch';
import { PopularSearch } from './styles';
import { debounce } from '../../../../lib/debounce';
import { useGooglePlace } from '../../../../lib/axios';

interface PopularSearchesProps {
  toggleSheet: () => void;
  type: string;
  setType: (type: string) => void;
}

const PopularSearches = ({
  toggleSheet,
  type,
  setType,
}: PopularSearchesProps) => {
  const { getPlaces } = useGooglePlace();
  return (
    <>
      <h3>Popular Searches</h3>
      <PopularSearch>
        {Data.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              toggleSheet();
              setType(item.name);
              if (type === item.name) {
                return;
              } else {
                const debouncedFunc = debounce(getPlaces, 500);
                debouncedFunc();
              }
            }}
          >
            <Image src={item.image} alt={item.name} />
          </div>
        ))}
      </PopularSearch>
    </>
  );
};

export default PopularSearches;
