import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import router from 'next/router';
import { LOCAL_LOGIN } from '../../../graphql/user';
import { StyledInput, StyledButton } from './styled';
import { throttle } from '../../../libs/utils';

const Input: FC = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [login] = useMutation(LOCAL_LOGIN);

  const clickButton = async (email: string, password: string) => {
    if (!email) return alert('이메일을 입력해주세요');
    if (!password) return alert('패스워드를 입력해주세요');
    throttle(async () => {
      const {
        data: { login: result },
      } = await login({ variables: { email, password } });

      if (!result) return alert('이메일 또는 비밀번호가 틀립니다!');
      return router.replace('/');
    }, 300);
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
