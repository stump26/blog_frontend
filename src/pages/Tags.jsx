import React from 'react';
import ReactLoading from 'react-loading';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { LOOK_TAG_BY_ID, GET_POST_BYID } from '../graphql/queries/postQueries';
import ArticleCard from '../component/ArticleList/ArticleCard';

const TagRelatedPostList = ({ posts }) => {
  const history = useHistory();
  const onClickArticle = (articleId) => {
    history.push(`/post/${articleId}`);
  };
  return posts.map((postId) => {
    const { loading, error, data } = useQuery(GET_POST_BYID, {
      variables: { id: postId },
      fetchPolicy: 'cache-and-network',
    });
    if (loading) {
      return (
        <ReactLoading
          className="loding-symbole"
          type="spin"
          color="#3376FB"
          width={100}
          height={100}
        />
      );
    }
    // Quering Error
    if (!loading && error) {
      console.error(error);
      return <div>bad</div>;
    }
    console.log(data);
    const { title, modifyDate, description, tags } = data.post_BY_ID;
    return (
      <ArticleCard
        key={postId}
        id={postId}
        title={title}
        date={modifyDate}
        desc={description}
        tags={tags}
        onClickArticle={onClickArticle}
      />
    );
  });
};

const TagsPage = ({ match }) => {
  const tagId = match && match.params && match.params.id ? match.params.id : null;
  const { loading, error, data } = useQuery(LOOK_TAG_BY_ID, {
    variables: { id: tagId },
    fetchPolicy: 'cache-and-network',
  });
  // Query on loading..
  if (loading) {
    return (
      <ReactLoading
        className="loding-symbole"
        type="bars"
        color="#3376FB"
        width={100}
        height={100}
      />
    );
  }
  // Quering Error
  if (!loading && error) {
    console.error(error);
    return <div>bad</div>;
  }

  const { tagName, posts, tagExplanation, tagUsedCount } = data.Tag_BY_ID;
  return (
    <>
      {!loading && !error && data && (
        <div>
          <Typography variant="h2">{tagName}</Typography>
          {tagExplanation && <div>{tagExplanation}</div>}
          <TagRelatedPostList posts={posts} />
        </div>
      )}
    </>
  );
};

export default TagsPage;
