import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import Input from '../Input';
import { StyledButton, ButtonContainer } from './styled';
import { SEND_EMAIL } from '../../../graphql/user';
import EmailAuth from '../EmailAuth';

interface Props {
  text: string;
  isAuth: Boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValues: (name: string, value: boolean) => void;
}

const EmailInput: FC<Props> = ({ text, onChange, isAuth, setValues }) => {
  const [sendEmail, { data }] = useMutation(SEND_EMAIL);
  const [check, setCheck] = useState(false);
  const onClick = async (email: string) => {
    const {
      data: { sendEmail: result },
    } = await sendEmail({ variables: { email } });
    if (result) return setCheck(true);
    return alert('중복된 이메일입니다. 다시입력해주세요');
  };
  return (
    <div>
      <div>이메일</div>
      <Input text={text} onChange={onChange} placeholder="이메일 주소 입력" name="email" />
      <ButtonContainer>
        {check ? (
          <EmailAuth email={text} isAuth={isAuth} setValues={setValues} />
        ) : (
          <StyledButton onClick={() => onClick(text)}>인증메일발송</StyledButton>
        )}
      </ButtonContainer>
    </div>
  );
};

export default EmailInput;
