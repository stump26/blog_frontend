import ApolloClient from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';

let uri = 'http://localhost:4000/graphql';
const client = new ApolloClient({
  uri,
  link: ApolloLink.from([createUploadLink({ uri })]),
});

export default client;
