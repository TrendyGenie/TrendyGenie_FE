'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 550px;
  padding: 13px 25px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  border-radius: 30px 30px 0px 0px;
  background: var(--white, #fff);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const DragIcon = styled.div`
  width: 63px;
  height: 5px;
  border-radius: 50px;
  background: #d9d9d9;
  cursor: grab;
`;

export const Form = styled.form`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    object-fit: contain;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 339px;
  height: 50px;
  padding: 20px 20px 17px 13px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--neut, rgba(217, 217, 217, 0.5));
  border: none;
  outline: none;

  &::placeholder {
    font-family: var(--font-primary, 'Urbanist', sans-serif);
    color: var(--neut-2, rgba(47, 47, 47, 0.5));
    font-size: 11px;
    font-weight: 400;
  }
`;
