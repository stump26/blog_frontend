import React from 'react';

import PostBody from 'component/PostBody';

const Post = ({ match: { params } }) => {
  return (
    <>
      <PostBody postID={params.id} />
    </>
  );
};

export default Post;
