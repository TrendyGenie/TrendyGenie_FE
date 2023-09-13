'use client';
import styled from 'styled-components';

export const ReelsWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 101;
  border: none;
  background-color: transparent;

  img {
    object-fit: contain;
  }
`;
