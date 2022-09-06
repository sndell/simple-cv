import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${({theme}) => theme.colors.text.primary};
    line-height: 1;
    margin: 0;
    font-weight: 400;
    font-size: 16px;

    &::-webkit-scrollbar {
      width: 0.8em;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #99999972;
      height: 10%;
    }
  }

  html {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyles;