'use client';

import { resultState } from '../../../../atoms/result';
import { useRecoilValue } from 'recoil';
import { queryAtom } from '../../../../atoms/searchAtom';
import Tops from '@/components/Interface/SearchResult/Top';
import { Container } from './styles';

const Result = () => {
  const results = useRecoilValue(resultState);
  const searchQuery = useRecoilValue(queryAtom);
  return (
    <Container>
      <Tops results={results} searchQuery={searchQuery} />
    </Container>
  );
};

export default Result;
