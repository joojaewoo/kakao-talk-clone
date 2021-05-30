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
    isSamePwd: false,
  });

  const { pwd, pwdChk, isSamePwd } = inputs;
  const setValues = (name: string, value: boolean) => setInputs({ ...inputs, [name]: value });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <PasswordInput
      text={pwd}
      onChange={onChange}
      textChk={pwdChk}
      isSamePwd={isSamePwd}
      setValues={setValues}
    />
  );
};
