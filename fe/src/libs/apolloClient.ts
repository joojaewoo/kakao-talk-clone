import { InMemoryCache, createHttpLink, ApolloClient, NormalizedCacheObject } from '@apollo/client';

export const getApolloClient = (() => {
  let apolloClient: ApolloClient<NormalizedCacheObject>;
  return (flag = false) => {
    if (flag || !apolloClient) {
      apolloClient = new ApolloClient({
        cache: new InMemoryCache({}),
        link: createHttpLink({
          uri: 'http://localhost:4000/graphql',
          credentials: 'include',
        }),
      });
    }
    return apolloClient;
  };
})();

export const initializeApollo = (initialState: NormalizedCacheObject = {}) => {
  const apolloClient = getApolloClient();
  if (initialState) {
    const existingCache = apolloClient.extract();
    const data = Object.assign(existingCache, initialState);
    apolloClient.cache.restore(data);
  }
  return apolloClient;
};
