import React from 'react';
import Editor from '../component/Editor';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { CHK_TOKEN_VERIFY } from '../graphql/queries/authQuerues';

const EditorPage = ({ match: { params } }) => {
  const history = useHistory();
  const token = sessionStorage.getItem('token');
  if (!token) {
    history.push('/auth');
  }
  const { loading, error, data } = useQuery(CHK_TOKEN_VERIFY, {
    variables: {
      token: token,
    },
  });
  if (loading) return 'Loading...';

  const { authority } = data.jwtVerify;
  if (authority > 1) {
    alert('권한이 없습니다.');
    history.goBack();
  }
  return (
    <>
      <Editor postID={params.postid} />
    </>
  );
};

export default EditorPage;
