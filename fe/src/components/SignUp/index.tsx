import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Input from './Input';
import { StyledButton, Container } from './styled';
import { CREATE_USER } from '../../graphql/user';
import { throttle } from '../../libs/utils';

const SignUp: FC = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: '',
    pwd: '',
    pwdChk: '',
    nickname: '',
    isAuth: false,
    isSamePwd: false,
  });
  const [signUp] = useMutation(CREATE_USER);
  const { email, pwd, pwdChk, nickname, isAuth, isSamePwd } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const setValues = (name: string, value: boolean) => setInputs({ ...inputs, [name]: value });

  const onClick = async (inputvalues: {
    email: string;
    pwd: string;
    pwdChk: string;
    nickname: string;
    isAuth: boolean;
    isSamePwd: boolean;
  }) => {
    const { email, pwd, pwdChk, nickname, isAuth, isSamePwd } = inputvalues;
    if (!email) return alert('이메일을 입력해주세요!');
    if (!isAuth) return alert('이메일 인증을 해주세요!');
    if (!pwd || !pwdChk) return alert('비밀번호를 입력해주세요!');
    if (!isSamePwd) return alert('비밀번호가 일치하지 않습니다!');
    if (!nickname) return alert('닉네임을 입력해주세요');
    const {
      data: { createUser: result },
    } = await signUp({ variables: { email, password: pwd, nickName: nickname } });
    if (!result) return alert('다시 시도해주세요');

    return router.replace('/login');
  };

  return (
    <>
      <Container>
        <EmailInput text={email} onChange={onChange} isAuth={isAuth} setValues={setValues} />
        <PasswordInput
          text={pwd}
          onChange={onChange}
          textChk={pwdChk}
          isSamePwd={isSamePwd}
          setValues={setValues}
        />
        <div>
          <span>닉네임</span>
          <Input
            text={nickname}
            onChange={onChange}
            placeholder="닉네임을 입력해주세요"
            name="nickname"
          />
        </div>
        <StyledButton onClick={() => onClick(inputs)}>완료</StyledButton>
      </Container>
    </>
  );
};

export default SignUp;
