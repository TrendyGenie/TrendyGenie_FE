'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.9375rem 1.8125rem 0.9375rem 0.625rem;
  gap: 0.625rem;
  border-bottom: 1px solid var(--neut-2, rgba(47, 47, 47, 0.5));
`;

export const Header = styled.div`
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.5rem;
  font-weight: 700;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  overflow-x: scroll;
  padding-bottom: 0.625rem;
  margin-bottom: 0.625rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled(Link)`
  display: flex;
  width: 10rem;
  height: auto;
  padding: 0.625rem 0.3125rem 0 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #fff;
  text-decoration: none;
`;

export const CardTitle = styled.h3`
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.5rem;
  font-weight: 700;
`;

export const RelativeCtn = styled.div`
  position: relative;
  width: 4.125rem;
  height: 3.3125rem;
  border-radius: 0.625rem;
`;

export const CardDescription = styled.div``;

export const CardImage = styled(Image)`
  border-radius: 0.625rem;
  object-fit: cover;
  height: 100%;
`;
