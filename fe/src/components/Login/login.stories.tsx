import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '../../libs/apolloClient';
import Login from './index';

export default {
  title: 'Login/LoginPage',
  component: Login,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => (
  <ApolloProvider client={getApolloClient()}>
    <Login />
  </ApolloProvider>
);
