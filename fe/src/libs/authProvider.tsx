import React, { FunctionComponent, ReactChild } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { MY_INFO } from '../graphql/user';

interface Props {
  children: ReactChild;
}

const AuthProvider: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();
  const { data, error } = useQuery(MY_INFO);

  if (
    router.pathname.includes('login') ||
    router.pathname.includes('callback') ||
    router.pathname.includes('signup')
  )
    return <>{children}</>;

  if (data) return <>{children}</>;
  if (error) router.push('/login');
  return <div>loading</div>;
};

export default AuthProvider;
