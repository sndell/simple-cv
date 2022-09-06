import React from 'react';
import GlobalStyles from './common/styles/global';
import theme from './common/styles/theme';
import { ThemeProvider } from 'styled-components';
type Props = {};

const App = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Ayo 🤨</h1>
    </ThemeProvider>
  );
};

export default App;
