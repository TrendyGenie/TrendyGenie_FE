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

  const toggleSheet = () => {
    setExpanded(!expanded);

    if (expanded) {
      return;
    } else {
      if (places.length === 0) {
        const debouncedFunc = debounce(getPlaces, 500);
        debouncedFunc();
      } else {
        return;
      }
    }
  };
  console.log(places);

  return (
    <Wrapper className={expanded ? 'expanded' : ''}>
      <DragIcon onClick={toggleSheet}>
        {expanded ? 'Collapse' : 'Expand'}
      </DragIcon>
      <Form>
        <Image
          src={search}
          alt="Search"
          onClick={() => debounce(getPlaces, 1500)}
        />
        <Input
          type="text"
          placeholder="Search for hotels, restaurants, Lounges..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>
      {expanded ? (
        <DisplayNearbyPlace
          type={type}
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
                  
                  toggleSheet();

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
      )}
    </Wrapper>
  );
};

export default BottomSheet;
