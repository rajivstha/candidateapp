import { AsyncStorage } from 'react-native';
import { Action } from 'react-native-router-flux';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import config from './config';
import { store } from './index';


const httpLink = createHttpLink({ uri:  config.GRAPHQL_SERVER_URL });

// const middlewareLink = new ApolloLink((operation, forward) => {
//   const token = store.getState().auth.token;
//   if (token) {  
//     operation.setContext({
//       headers: {
//         authorization: token || null
//       }
//     });
//   }
//   return forward(operation);
// });

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
})

const link = ApolloLink.from([
  errorLink,
  httpLink,
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    dataIdFromObject: o => o._id
  })
});

export default client;