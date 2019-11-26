import gql from 'graphql-tag';

export const CHK_TOKEN_VERIFY = gql`
  query jwtVerify($token: String!) {
    jwtVerify(token: $token) {
      _id
      email
      username
      authority
    }
  }
`;
