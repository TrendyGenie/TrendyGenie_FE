'use client';
import React, { useState, FC, useEffect } from 'react';
import { Wrapper, DragIcon } from './styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  loadingAtom,
  locationAtom,
  placesAtom,
  queryAtom,
  typeAtom,
} from '../../../../atoms/searchAtom';
import { useGooglePlace } from '../../../../lib/axios';
import { debounce } from '../../../../lib/debounce';
import DisplayNearbyPlace from '../DisplayNearbyPlace';
import { boundsAtom } from '../../../../atoms/boundsAtom';
import QueryForm from '../QueryForm';
import PopularSearches from '../PopularSearches';
import ViewSearchedList from '../ViewSearchedList';
import Spinner from '../Spinner';

const BottomSheet: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [type, setType] = useRecoilState(typeAtom);
  const { getPlaces } = useGooglePlace();
  const [, setLocation] = useRecoilState(locationAtom);
  const query = useRecoilValue(queryAtom);
  const places = useRecoilValue(placesAtom);
  const loading = useRecoilValue(loadingAtom);
  const bounds = useRecoilValue(boundsAtom);

  useEffect(() => {
    if (query.isSearch) {
      setLocation(places[0].geometry.location); }
  }, [places, query.isSearch, setLocation]);

  useEffect(() => {
    if (type) {
      const debounced = debounce(getPlaces, 1000);
      debounced();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const toggleSheet = () => {
    setExpanded(!expanded);

    if (expanded) {
      return;
    } else {
      if (places.length === 0 || bounds) {
        const debouncedFunc = debounce(getPlaces, 500);
        debouncedFunc();
      } else {
        return;
      }
    }
  };
  // console.log(places);

  return (
    <Wrapper className={expanded ? 'expanded' : ''}>
      <DragIcon onClick={toggleSheet}>
        {expanded ? 'Collapse' : 'Expand'}
      </DragIcon>
      {query.isSearch ? (
        loading ? (
          <Spinner />
        ) : (
          <ViewSearchedList places={places} expanded={expanded} />
        )
      ) : (
        <>
          <QueryForm setExpanded={setExpanded} />
          {expanded ? (
            <DisplayNearbyPlace
              type={type}
              setType={setType}
              places={places}
              loading={loading}
            />
          ) : (
            <PopularSearches
              toggleSheet={toggleSheet}
              type={type}
              setType={setType}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default BottomSheet;
