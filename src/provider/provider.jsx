import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
/* import { persistCache } from 'apollo-cache-persist' */
import resolvers from './resolvers';
import typeDefs from './typeDefs'

const cache = new InMemoryCache({});

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
        user: {
            login: "",
            email: "",
            avatarUrl: "",
            url: "",
            repositories: [],
            __typename: "user"
        },
    },
    resolvers: resolvers,
    typeDefs: typeDefs
  }
});


/* persistCache({
  cache: cache, // Try adding cache like this.
  storage: window.localStorage,
  trigger:'write',
  debug: true,
}); */

export default function Provider({ children }) {
  
  return (
      <ApolloProvider client={client}>
          {children}
      </ApolloProvider>
  )
}