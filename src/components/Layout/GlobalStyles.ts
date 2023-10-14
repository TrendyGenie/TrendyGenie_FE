'use client';
import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;

    --neut: rgba(217, 217, 217, 0.5);
    --neut-2: rgba(47, 47, 47, 0.5);
    --pri-color: #154b34;

    --font-primary: 'Urbanist', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-snap-type: y mandatory;
  }

  .draggable-panel {
    width: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }

  .handle {
    text-align: center;
    cursor: grab;
  }

  .expanded {
    transform: translateY(0%);
  }

  .collapsed {
    transform: translateY(100%);
  }

  a {
    text-decoration: none;
  }
`;
