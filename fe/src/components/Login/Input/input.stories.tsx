import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '../../../libs/apolloClient';
import Input from './index';

export default {
  title: 'Login/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => (
  <ApolloProvider client={getApolloClient()}>
    <Input />
  </ApolloProvider>
);
