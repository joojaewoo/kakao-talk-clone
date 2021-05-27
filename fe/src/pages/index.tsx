import React from 'react';
import { GetServerSideProps } from 'next';
import { USER_INFO } from '../graphql/user';
import getApolloClient from '../libs/apolloClient';

const FriendList = () => <div>123</div>;

export default FriendList;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = '';
  const { userId } = ctx.query || {};
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: USER_INFO,
    variables: { userId },
    context: {
      headers: { cookie: `jwt=${jwt}` },
    },
  });
  if (!data.user) {
    return {
      notFound: true,
    };
  }

  const initialState = apolloClient.cache.extract();
  return {
    props: { initialState },
  };
};
