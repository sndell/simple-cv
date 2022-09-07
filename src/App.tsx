import GlobalStyles from './common/styles/global';
import theme from './common/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';

type Props = {};

const App = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
