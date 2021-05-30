import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTH_EMAIL } from '../../../graphql/user';
import { Container, Input, Button } from './styled';
import { throttle } from '../../../libs/utils';

interface Props {
  email: string;
  isAuth: Boolean;
  setValues: (name: string, value: boolean) => void;
}

const EmailAuth: FC<Props> = ({ email, isAuth, setValues }) => {
  const [input, setInput] = useState('');
  const [mutate] = useMutation(AUTH_EMAIL);
  const onClick = async (email: string, auth: string) =>
    throttle(async () => {
      const {
        data: { authEmail: result },
      } = await mutate({ variables: { email, auth } });
      if (result) return setValues('isAuth', true);
      return alert('인증 번호가 다릅니다!');
    }, 300);
  return (
    <Container>
      {isAuth ? (
        <div>인증 완료!</div>
      ) : (
        <>
          <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button type="button" onClick={() => onClick(email, input)}>
            확인
          </Button>
        </>
      )}
    </Container>
  );
};

export default EmailAuth;
