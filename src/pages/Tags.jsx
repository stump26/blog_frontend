import React from 'react';
import ReactLoading from 'react-loading';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { LOOK_TAG_BY_ID, GET_POST_BYID } from '../graphql/queries/postQueries';
import ArticleCard from '../component/ArticleList/ArticleCard';

const TagsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1150px;
`;

const TagNameHead = styled.div`
  font-size: 5rem;
  font-weight: 500;
  overflow-x: auto;
  width: 100%;
  margin-top: 1rem;
  font-family: 'Do Hyeon', sans-serif;
  text-transform: capitalize;
`;
const TagUsedCounter = styled.span`
  font-size: 1rem;
  color: #ff3700;
`;
const TagThumbnailImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const TagExplanation = styled.p`
  color: #b76d58;
  font-size: 1.2rem;

  &::first-letter {
    padding-left: 0.1em;
    font-size: 200%;
  }
`;

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

  const { tagName, posts, tagExplanation, tagUsedCount, tagThumbnail } = data.Tag_BY_ID;
  return (
    <>
      {!loading && !error && data && (
        <TagsPageContainer>
          <TagNameHead>
            {tagName}
            <TagUsedCounter>- {tagUsedCount}</TagUsedCounter>
          </TagNameHead>
          {tagThumbnail && <TagThumbnailImg src={tagThumbnail} alt="" />}
          {tagExplanation && <TagExplanation>{tagExplanation}</TagExplanation>}
          <TagRelatedPostList posts={posts} />
        </TagsPageContainer>
      )}
    </>
  );
};

export default TagsPage;
