import React from 'react';
import Disqus from 'disqus-react';

const PostComments = ({ url, identifier, title }) => {
  const disqusShortname = 'example';
  const disqusConfig = { url, identifier, title };

  return (
    <div className="article">
      <h1>{this.props.article.title}</h1>
      <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
        Comments
      </Disqus.CommentCount>

      <p>{this.props.article.body}</p>

      <Disqus.CommentEmbed
        commentId={this.props.article.featuredComment}
        showMedia={true}
        height={160}
      />

      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default PostComments;
