import gql from 'graphql-tag';

export const IMAGE_UPLOAD_QUERY = gql`
  mutation imageUpload($file: Upload!) {
    imageUpload(file: $file) {
      filename
    }
  }
`;
