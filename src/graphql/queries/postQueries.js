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

export const GET_POST_BYID = gql`
  query POST_BY_ID($id: String!) {
    post_BY_ID(id: $id) {
      _id
      title
      modifyDate
      description
    }
  }
`;
