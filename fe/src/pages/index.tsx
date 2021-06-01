import React from 'react';
import { GetServerSideProps } from 'next';
import FriendListPage from '../components/FriendList';
import { FRIEND_LIST } from '../graphql/user';
import { getApolloClient } from '../libs/apolloClient';
import { getCookies } from '../libs/utils';

const FriendList = () => <FriendListPage />;

export default FriendList;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = getCookies(ctx);
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: FRIEND_LIST,
    context: {
      headers: { cookie: `jwt=${jwt}` },
    },
  });
  if (!data.friends) {
    return {
      notFound: true,
    };
  }

  const initialState = apolloClient.cache.extract();
  return {
    props: { initialState },
  };
};
