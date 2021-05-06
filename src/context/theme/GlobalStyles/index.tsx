import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: ${(props) => props.theme.fonts[1]};
  }
`;

export default GlobalStyle;
