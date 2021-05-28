import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';
import theme from '../theme';
import GlobalStyle from '../theme/global';
import { initializeApollo } from '../libs/apolloClient';
import AuthProvider from '../libs/authProvider';

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = initializeApollo(pageProps.initialState);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};
export default App;
