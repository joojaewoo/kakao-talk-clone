import React from 'react';
import Login from './index';

export default {
  title: 'LoginPage',
  component: Login,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => <Login />;
