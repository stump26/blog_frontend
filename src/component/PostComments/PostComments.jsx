import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

const PostComments = ({ url, identifier, title }) => {
  return (
    <ReactDisqusComments
      className="disqus-post-comments"
      shortname="stumpark-blog"
      identifier={identifier}
      title={title}
      url={url}
      // onNewComment={this.handleNewComment}
    />
  );
};

export default PostComments;
