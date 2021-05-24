import React, { useState } from 'react';
import PasswordInput from './index';

export default {
  title: 'SignUp/PasswordInput',
  component: PasswordInput,
};

export const Default = () => {
  const [inputs, setInputs] = useState({
    pwd: '',
    pwdChk: '',
  });

  const { pwd, pwdChk } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return <PasswordInput text={pwd} onChange={onChange} textChk={pwdChk} />;
};
