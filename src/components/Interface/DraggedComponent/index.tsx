'use client';
import React, { useState, FC, useEffect } from 'react';
import { Wrapper, DragIcon, Form, Input, PopularSearch } from './styles';
import search from '../../../../public/svgs/search.svg';
import Image from 'next/image';
import { data as Data } from './popularSearch';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  loadingAtom,
  placesAtom,
  queryAtom,
  typeAtom,
} from '../../../../atoms/searchAtom';
import { useGooglePlace } from '../../../../lib/axios';
import { debounce } from '../../../../lib/debounce';
import DisplayNearbyPlace from '../DisplayNearbyPlace';

const BottomSheet: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [type, setType] = useRecoilState(typeAtom);
  const [query, setQuery] = useRecoilState(queryAtom);
  const { getPlaces } = useGooglePlace();
  const places = useRecoilValue(placesAtom);
  const loading = useRecoilValue(loadingAtom);
  const debouncedFunc = debounce(getPlaces, 3000);

  useEffect(() => {
    if (query || type) {
      debouncedFunc();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, type]);

  const toggleSheet = () => {
    setExpanded(!expanded);
    const debouncedFunc = debounce(getPlaces, 1500);
    debouncedFunc();
  };
  console.log(places);

  return (
    <Wrapper className={expanded ? 'expanded' : ''}>
      <DragIcon onClick={toggleSheet}>
        {expanded ? 'Collapse' : 'Expand'}
      </DragIcon>
      <Form>
        <Image src={search} alt="Search" />
        <Input
          type="text"
          placeholder="Search for hotels, restaurants, Lounges..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>
      {expanded ? (
        <DisplayNearbyPlace
          setType={setType}
          places={places}
          loading={loading}
        />
      ) : (
        <>
          <h3>Popular Searches</h3>
          <PopularSearch>
            {Data.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setType(item.name);
                  const debouncedFunc = debounce(getPlaces, 1500);
                  debouncedFunc();
                }}
              >
                <Image src={item.image} alt={item.name} />
              </div>
            ))}
          </PopularSearch>
        </>
      )}
    </Wrapper>
  );
};

export default BottomSheet;
