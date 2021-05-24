import React, { FC } from 'react';
import Input from '../Input';
import { StyledButton, ButtonContainer } from './styled';

interface Props {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: FC<Props> = ({ text, onChange }) => (
  <div>
    <div>이메일</div>
    <Input text={text} onChange={onChange} placeholder="이메일 주소 입력" name="email" />
    <ButtonContainer>
      <StyledButton>인증메일발송</StyledButton>
    </ButtonContainer>
  </div>
);

export default EmailInput;
