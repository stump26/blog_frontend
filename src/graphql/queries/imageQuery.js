import gql from 'graphql-tag';

export const IMAGE_UPLOAD_QUERY = gql`
  mutation imageUpload(
    $file: Upload!
    $fileSize: Int!
    $lastModifiedDate: Date!
  ) {
    imageUpload(
      file: $file
      fileSize: $fileSize
      lastModifiedDate: $lastModifiedDate
    ) {
      isExist
      fileName
      filePath
    }
  }
`;
