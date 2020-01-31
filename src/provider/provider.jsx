import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist'
import mutations from './mutations';

// not my code
const errorHandler = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
};

const cache = new InMemoryCache({});

// create client
const client = new ApolloClient({
  uri: process.env.GITHUB_URL,
  headers: {
    authorization: `Bearer ${
      process.env.GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
  cache: cache,
  clientState: {
    defaults: {
        searchTerm: "",
    },
    resolvers: {
      Mutation: mutations
    },
  },
  onError: errorHandler
});

// await cache and render function, not my idea
export const setupProviderAndRender = async (component) => {
  await persistCache({
    cache: cache,
    storage: window.localStorage,
    debug: true,
  });
  ReactDOM.render(
    <ApolloProvider client={client}>
      {component}
    </ApolloProvider>,
    document.getElementById('root'),
  );
}