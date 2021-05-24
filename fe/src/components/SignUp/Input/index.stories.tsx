import React, { useState } from 'react';
import Input from './index';

export default {
  title: 'Signup/Input',
  component: Input,
};

export const Default = () => {
  const [inputs, setInputs] = useState({ email: '' });

  const { email } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return <Input name="email" text={email} onChange={onChange} placeholder="이메일 입력" />;
};
