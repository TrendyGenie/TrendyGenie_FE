'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.9375rem 0 0.9375rem 0;
  gap: 0.625rem;
`;

export const Header = styled.h1`
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.5rem;
  font-weight: 700;
`;

export const Reviews = styled.div``;

export const FlexTop = styled.div`
  display: flex;
  width: 13.8125rem;
  align-items: center;
  gap: 0.625rem;

  img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Name = styled.h3`
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.6875rem;
  font-weight: 700;
`;

export const Username = styled.p`
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.6875rem;
  font-weight: 400;
`;

export const Time = styled.div`
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.5rem;
  font-weight: 400;
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.56rem;

  p {
    color: #000;
    font-family: var(--font-primary);
    font-size: 0.5rem;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 18.9375rem;
    object-fit: cover;
    margin-top: 0.19rem;
  }
`;
