import React from 'react';
import Editor from 'component/Editor';
import { useHistory } from 'react-router-dom';
const EditorPage = () => {
  const history = useHistory();
  const token = sessionStorage.getItem('token');
  if (!token) {
    history.push('/auth');
  }
  return (
    <div>
      <Editor />
    </div>
  );
};

export default EditorPage;
