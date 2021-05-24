import React, { FC } from 'react';
import Link from 'next/link';
import { Container, InnerContainer, SignIn, TableCell } from './styled';
import Logo from './logo';
import Input from './input';

const Login: FC = () => (
  <Container>
    <InnerContainer>
      <Logo />
    </InnerContainer>
    <InnerContainer>
      <Input />
    </InnerContainer>
    <SignIn>
      <TableCell>
        <Link href="/singin">회원가입</Link>
      </TableCell>
    </SignIn>
  </Container>
);

export default Login;
