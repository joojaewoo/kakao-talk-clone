import React, { FC, useState } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Input from './Input';
import { StyledButton, Container } from './styled';

const SignUp: FC = () => {
  const [inputs, setInputs] = useState({
    email: '',
    pwd: '',
    pwdChk: '',
    nickname: '',
  });

  const { email, pwd, pwdChk, nickname } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <>
      <Container>
        <EmailInput text={email} onChange={onChange} />
        <PasswordInput text={pwd} onChange={onChange} textChk={pwdChk} />
        <div>
          <span>닉네임</span>
          <Input
            text={nickname}
            onChange={onChange}
            placeholder="닉네임을 입력해주세요"
            name="nickname"
          />
        </div>
        <StyledButton>완료</StyledButton>
      </Container>
    </>
  );
};

export default SignUp;
