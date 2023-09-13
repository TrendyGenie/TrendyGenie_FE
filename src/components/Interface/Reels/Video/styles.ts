'use client';
import styled from 'styled-components';

export const VideoWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  scroll-snap-align: start;

  img {
    object-fit: cover;
  }
`;

export const ReelsInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  font-family: var(--font-primary);
`;

export const ReelsInfoTitle = styled.h2`
  max-width: 8.875rem;
  font-size: 0.9375rem;
  font-weight: 700;
`;

export const ReelsInfoSubtitle = styled.p`
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
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.0625rem;
  font-size: 0.5rem;
  font-weight: 400;
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
      background: transparent;
    }

    &:last-child {
      background: var(--pri-color, #154b34);
    }
  }
`;
