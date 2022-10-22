import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline-color: ${props => props.theme['yellow-dark']};
  }

  @media (max-width: 425px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 370px) {
    html {
      font-size: 85%;
    }
  }


  @media (max-width: 320px) {
    html {
      font-size: 70%;
    }
  }

  @media (max-width: 270px) {
    html {
      font-size: 60%;
    }
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .container {
    max-width: min(90rem, 90vw);
    margin-inline: auto;
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme['base-button']};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme['base-subtitle']};
    border-radius: 1rem;
  }
`;
