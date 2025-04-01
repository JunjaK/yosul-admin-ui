import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable';

export default defineNuxtPlugin(() => {
  const apolloClient = new ApolloClient({
    uri: import.meta.env.VITE_GQL_HOST,
    cache: new InMemoryCache(),
  });

  provideApolloClient(apolloClient);

  return {

    provide: { DefaultApolloClient, apolloClient },
  };
});
