import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { ssrEnabled } from '../lib/util';

let uri = '/graphql';
if (process.env.NODE_ENV === 'production') {
  uri = `${process.env.REACT_APP_BACKEND_HOST}/graphql`;
}

const authLink = setContext((_, { headers, ...context }) => {
  // get the authentication token from local storage if it exists
  const token = ssrEnabled ? null : sessionStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
    ...context,
  };
});

const uploadLink = createUploadLink({
  uri,
});

export const link = ApolloLink.from([authLink, uploadLink]);

const client = new ApolloClient({
  uri,
  link: link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

export default client;
