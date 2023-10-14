'use client';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    color: #fff;
    background: black;
    font-size: 0.6rem;
    padding: 0.4em;
    border-radius: 0.3em;
  }
`;

export const Title = styled.h1`
  align-self: flex-start;
  width: 15.4375rem;
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.9375rem;
  font-weight: 700;
`;

export const FlexCtn = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid var(--neut-2, rgba(47, 47, 47, 0.5));
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.62rem;
`;

export const RelativeCtn = styled.div`
  position: relative;

  img {
    display: flex;
    flex-shrink: 0;
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
  gap: 0.88rem;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100vh;
  background: var(--light-prim, #f2fffa);
  padding: 1em;

  ${Top} {
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

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const ReelsInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: var(--font-primary);
  gap: 0.12rem;
  max-width: 11.4375rem;
  color: #000;
`;

export const ReelsInfoTitle = styled.h2`
  font-weight: 700;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const ReelsInfoSubtitle = styled.p`
  color: var(--neut-2, rgba(47, 47, 47, 0.5));
  font-family: var(--font-primary);
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

export const Desc = styled.p`
  color: #000;
  font-family: var(--font-primary);
  font-size: 0.375rem;
  font-weight: 400;
  max-width: 9.9375rem;
`;