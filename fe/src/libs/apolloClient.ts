import { InMemoryCache, createHttpLink, ApolloClient, NormalizedCacheObject } from '@apollo/client';

export default (() => {
  let apolloClient: ApolloClient<NormalizedCacheObject>;
  return () => {
    if (!apolloClient) {
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
