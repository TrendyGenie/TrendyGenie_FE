'use client';
import styled from 'styled-components';

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