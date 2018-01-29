import { AsyncStorage } from 'react-native';
import { Action } from 'react-native-router-flux';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { onError } from 'apollo-link-error';
import config from './config';

const httpLink = createHttpLink({ uri:  config.GRAPHQL_SERVER_URL });

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = ApolloLink.from([
  errorLink,
  httpLink,
]);

const cache = new InMemoryCache({
  dataIdFromObject: o => o._id
});


persistCache({
  cache,
  storage: AsyncStorage,
});

const client = new ApolloClient({
  link: link,
  cache: cache
});

export default client;