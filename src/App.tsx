import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import { CoreTheme } from './global/Themes/CoreTheme';
import { RWDProvider } from './global/RWD';
import { HeaderPageFooter } from './global/Layouts/HeaderPageFooter/HeaderPageFooter';
import { GlobalStyles } from './global/GlobalStyles/GlobalStyles';
import { ErrorHandler } from './global/ErrorHandler/ErrorHandler';
import { AppRouter } from './global/AppRouter/AppRouter';
import { client } from 'global/ApolloClient/ApolloClient';
import { ReactQuery } from 'global/ReactQuery/ReactQuery';
import { Redux } from 'global/Redux/Redux';

const App: FunctionComponent = () => (
  <Redux>
    <ThemeProvider theme={CoreTheme}>
      <ApolloProvider client={client}>
        <RWDProvider>
          <ReactQuery>
            <Router>
              <HeaderPageFooter>
                <GlobalStyles />
                <ErrorHandler>
                  <AppRouter />
                </ErrorHandler>
              </HeaderPageFooter>
            </Router>
          </ReactQuery>
        </RWDProvider>
      </ApolloProvider>
    </ThemeProvider>
  </Redux>
);

export default App;
