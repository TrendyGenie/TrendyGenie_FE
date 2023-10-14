'use client';

import { resultState } from '../../../../atoms/result';
import { useRecoilValue } from 'recoil';
import { placesAtom, queryAtom } from '../../../../atoms/searchAtom';
import Tops from '@/components/Interface/SearchResult/Top';
import { Container } from './styles';
import OtherSearches from '@/components/Interface/SearchResult/OtherSearches';
import { usePathname } from 'next/navigation';

const Result = () => {
  const results = useRecoilValue(resultState);
  const searchQuery = useRecoilValue(queryAtom);
  const places = useRecoilValue(placesAtom);
  const path = usePathname();
  const id = path.split('/')[2];
  return (
    <Container>
      <Tops results={results} searchQuery={searchQuery} />
      <OtherSearches places={places} id={id} searchQuery={searchQuery} />
    </Container>
  );
};

export default Result;
