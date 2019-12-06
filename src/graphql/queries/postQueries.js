import gql from 'graphql-tag';

export const GET_POST_LIST = gql`
  query post($page: Int!) {
    post(page: $page) {
      _id
      title
      modifyDate
      description
      tags
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
      tags
    }
  }
`;

export const WRITE_POST = gql`
  mutation writePost(
    $title: String!
    $writer: String!
    $description: String!
    $tags: [String]
  ) {
    writePost(
      title: $title
      writer: $writer
      description: $description
      tags: $tags
    ) {
      _id
    }
  }
`;
export const UPDATE_POST = gql`
  mutation UPDATEPOST(
    $id: String!
    $newTitle: String!
    $newDescription: String!
    $newTags: [String]
  ) {
    updatePost(
      _id: $id
      newTitle: $newTitle
      newDescription: $newDescription
      newTags: $newTags
    ) {
      _id
    }
  }
`;
