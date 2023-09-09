'use client';
import styled from 'styled-components';

export const NearbyPlaceWrapper = styled.div`
  width: 100%;
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.88rem;
`;

export const Tab = styled.button`
  display: flex;
  width: auto;
  height: 19px;
  padding: 1px 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: var(--neut, rgba(217, 217, 217, 0.5));
  border: none;
  outline: none;
  color: var(--black, #000);
  font-family: var(--font-primary, 'Urbanist');
  font-size: 0.6875rem;
  font-weight: 400;
  text-transform: capitalize;

  &.active {
    background: var(--primary, #000);
    color: var(--white, #fff);
  }
`;

export const DisplayContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.06rem;
  overflow-y: auto;
  height: 400px;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.p`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  color: var(--white, #fff);
  font-family: var(--font-primary, 'Urbanist');
  font-size: 0.9375rem;
  font-weight: 700;
  white-space: nowrap;
`;
