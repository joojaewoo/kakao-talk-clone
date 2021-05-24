import React from 'react';
import Input from './index';

export default {
  title: 'Login/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => <Input />;
