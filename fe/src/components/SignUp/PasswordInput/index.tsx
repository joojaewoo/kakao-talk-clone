import React, { FC, useEffect } from 'react';
import Input from '../Input';

interface Props {
  text: string;
  textChk: string;
  isSamePwd: boolean;
  setValues: (name: string, value: boolean) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: FC<Props> = ({ text, onChange, textChk, isSamePwd, setValues }) => {
  useEffect(() => {
    if (text === textChk) setValues('isSamePwd', true);
    else setValues('isSamePwd', false);
  }, [text, textChk]);
  return (
    <div>
      <div>비밀번호</div>
      <Input
        text={text}
        onChange={onChange}
        placeholder="비밀번호 입력"
        name="pwd"
        type="password"
      />
      <Input
        text={textChk}
        onChange={onChange}
        placeholder="비밀번호 재입력"
        name="pwdChk"
        type="password"
      />
      {!isSamePwd ? <div>비밀번호가 다릅니다</div> : null}
    </div>
  );
};

export default PasswordInput;
