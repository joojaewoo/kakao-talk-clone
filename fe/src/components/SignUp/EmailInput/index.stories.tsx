import React, { useState } from 'react';
import EmailInput from './index';

export default {
  title: 'SignUp/EmailInput',
  component: EmailInput,
};

export const Default = () => {
  const [inputs, setInputs] = useState({ email: '', isAuth: false });

  const { email, isAuth } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const setValues = (name: string, value: boolean) => setInputs({ ...inputs, [name]: value });
  return <EmailInput text={email} onChange={onChange} isAuth={isAuth} setValues={setValues} />;
};
