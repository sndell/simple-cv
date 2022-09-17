import store from './store';
import { Provider } from 'react-redux';
import GlobalStyles from './common/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './common/styles/theme';

import { Outlet } from 'react-router-dom';
import Test from './Test';

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
        {/* <Test /> */}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
