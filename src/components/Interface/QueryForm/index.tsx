'use client';

import Image from 'next/image';
import { Form, Input } from './styles';
import { debounce } from '../../../../lib/debounce';
import search from '../../../../public/svgs/search.svg';
import { useGooglePlace } from '../../../../lib/axios';
import { useRecoilState } from 'recoil';
import { queryAtom } from '../../../../atoms/searchAtom';

interface QueryFormProps {
  setExpanded: (expanded: boolean) => void;
}

const QueryForm = ({ setExpanded }: QueryFormProps) => {
  const [query, setQuery] = useRecoilState(queryAtom);
  const { getPlaces } = useGooglePlace();
  return (
    <Form>
      <Image
        src={search}
        alt="Search"
        onClick={() => {
          setExpanded(false);
          debounce(getPlaces, 1000);
          setQuery({ ...query, isSearch: true });
        }}
      />
      <Input
        type="text"
        placeholder="Search for hotels, restaurants, Lounges..."
        value={query.input!}
        onChange={(e) => {
          if (query.input === '') {
            setQuery({ input: e.target.value, isSearch: false });
          } else {
            setQuery({ ...query, input: e.target.value });
          }
        }}
      />
    </Form>
  );
};

export default QueryForm;
