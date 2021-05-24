import React, { FunctionComponent, ReactChild } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

interface Props {
  children: ReactChild;
}

const AuthProvider: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();
  const { data, error } = useQuery(
    gql`
      query {
        myInfo {
          _id
          email
          nickName
        }
      }
    `,
  );

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
