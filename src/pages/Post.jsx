import React from 'react';

import NavBar from 'component/NavBar';
import PostBody from 'component/PostBody';

const Post = ({ match: { params } }) => {
  return (
    <>
      <NavBar />
      <PostBody postID={params.id} />
    </>
  );
};

export default Post;
