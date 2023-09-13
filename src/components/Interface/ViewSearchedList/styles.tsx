'use client';
import styled from 'styled-components';

export const Title = styled.h1`
  align-self: flex-start;
  width: 15.4375rem;
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.9375rem;
  font-weight: 700;
`;

export const Card = styled.div`
  display: flex;
  height: auto;
  padding: 0.9375rem 0.3125rem 1.3125rem 0.9375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  border-radius: 0.625rem;
  background: var(--light-prim, #f2fffa);
  flex-shrink: 0;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.62rem;
`;

export const RelativeCtn = styled.div`
  position: relative;
  width: 3.75rem;
  height: 3.8125rem;
  img {
    display: flex;
    flex-shrink: 0;
    border-radius: 0.625rem;
    object-fit: cover;
  }
`;

export const ContactCtn = styled.div`
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  button {
    display: flex;
    padding: 0.1875rem 0.5rem;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.3125rem;
    border: none;
    cursor: pointer;
    color: #fff;
    font-family: var(--font-primary);
    font-size: 0.5rem;
    font-weight: 700;

    &:first-child {
      background: black;
    }

    &:last-child {
      background: var(--pri-color, #154b34);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  gap: 0.88rem;

  &.column {
    flex-direction: column;
    overflow-y: auto;
    height: 450px;

    ${Card} {
      width: 100%;
      justify-content: space-between;
      padding: 1em;
      position: relative;
    }

    ${Top} {
      flex-direction: column-reverse;
      width: 100%;
      position: relative;
    }

    ${RelativeCtn} {
      width: 100%;
      height: 12.0625rem;

      img {
        width: 100%;
      }
    }

    ${ContactCtn} {
      flex-direction: column;
      gap: 0.25rem;

      position: absolute;
      right: 1rem;
      top: 250px;

      button {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

export const ReelsInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  color: #000;
  font-family: var(--font-primary);
  gap: 0.12rem;
`;

export const ReelsInfoTitle = styled.h2`
  max-width: 8.875rem;
  font-size: 0.9375rem;
  font-weight: 700;
  text-transform: capitalize;
`;

export const ReelsInfoSubtitle = styled.p`
  font-size: 0.5rem;
  font-weight: 400;
`;

export const Distance = styled.p`
  color: var(--neut-2, rgba(47, 47, 47, 0.5));
  font-size: 0.5rem;
  font-weight: 400;
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 0.0625rem;
  font-size: 0.5rem;
  font-weight: 700;
  text-decoration-line: underline;
`;

export const OpenTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.0625rem;
  font-size: 0.5rem;
  font-weight: 400;
`;
