import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

import GlobalStyles from './GlobalStyles';

const ThemeContext: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default ThemeContext;
