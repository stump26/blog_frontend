import gql from 'graphql-tag';

export const GET_POST_LIST = gql`
  query post {
    post {
      _id
      title
      description
    }
  }
`;
