import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import router from 'next/router';
import { LOCAL_LOGIN } from '../../../graphql/user';
import { StyledInput, StyledButton } from './styled';

const Input: FC = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [login, { data }] = useMutation(LOCAL_LOGIN);

  const clickButton = async (id: string, password: string) => {
    if (!id) alert('이메일을 입력해주세요');
    else if (!password) alert('패스워드를 입력해주세요');
    else {
      await login({ variables: { email: id, password } });
      if (!data) alert('이메일 또는 비밀번호가 틀립니다!');
      else router.replace('/');
    }
  };

  return (
    <>
      <StyledInput
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <br />
      <StyledInput
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="패스워드"
      />
      <br />
      <StyledButton type="button" onClick={() => clickButton(email, pwd)}>
        확인
      </StyledButton>
    </>
  );
};

export default Input;
