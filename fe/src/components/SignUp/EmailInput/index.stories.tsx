import React, { useState } from 'react';
import EmailInput from './index';

export default {
  title: 'SignUp/EmailInput',
  component: EmailInput,
};

export const Default = () => {
  const [inputs, setInputs] = useState({ email: '' });

  const { email } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return <EmailInput text={email} onChange={onChange} />;
};
