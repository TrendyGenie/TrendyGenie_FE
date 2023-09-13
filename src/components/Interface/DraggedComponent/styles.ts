'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 550px;
  padding: 13px 25px;
  flex-direction: column;
  align-items: center;
  gap: 0.88rem;
  flex-shrink: 0;
  border-radius: 30px 30px 0px 0px;
  background: var(--white, #fff);
  position: fixed;
  bottom: -300px;
  left: 0;
  right: 0;
  transform-origin: bottom;
  transition: all 0.3s ease-in-out;

  &.expanded {
    bottom: 0;
  }

  h3 {
    color: var(--black, #000);
    font-family: var(--font-primary, 'Urbanist', sans-serif);
    font-size: 0.9375rem;
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const DragIcon = styled.button`
  width: 63px;
  text-align: center;
  display: flex;
  border-radius: 50px;
  background: #d9d9d9;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  font-family: var(--font-primary, 'Urbanist', sans-serif);
  color: var(--neut-2, rgba(47, 47, 47, 0.5));
  font-size: 11px;
  font-weight: 400;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

