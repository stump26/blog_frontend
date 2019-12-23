import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';

const uri = process.env.REACT_APP_BACKEND_HOST + '/graphql';

const authLink = setContext((_, { headers, ...context }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem('token');
  // console.log('TCL: authLink -> token', token);
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
  uri: uri,
});

export const link = ApolloLink.from([authLink, uploadLink]);

const client = new ApolloClient({
  uri,
  link: link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

export default client;
