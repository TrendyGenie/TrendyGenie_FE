'use client';
import { FC } from 'react';
import styled from 'styled-components';

const Spinner: FC = () => {
  return <SpinnerWrapper></SpinnerWrapper>;
};

export default Spinner;

const SpinnerWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0.2rem solid #f3f3f3;
  border-top: 0.2rem solid #3498db;
  animation: spin 2s linear infinite;
  margin: 4rem auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
