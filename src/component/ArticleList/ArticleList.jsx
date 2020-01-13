/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import ArticleCard from './ArticleCard';
import { GET_POST_LIST } from '../../graphql/queries/postQueries';
import './ArticleList.scss';
import {SkeletonArticleCard} from '../Skeleton';

const ArticleList = () => {
  const [articleElements, setArticleElements] = useState([]);
  const [page, setPage] = useState(0);
  const [existNext, setExistNext] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(GET_POST_LIST, {
    variables: {
      page: 0,
    },
  });
  const history = useHistory();
  const fetchNextPage = async (nextPage) => {
    setPage(nextPage);
    fetchMore({
      variables: {
        page: nextPage,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        if (fetchMoreResult.post.length === 0) {
          setExistNext(false);
        }
        setArticleElements([...articleElements, ...fetchMoreResult.post]);
        return fetchMoreResult.post;
      },
    });
  };

  const setCurrentReadOffset = (e) => {
    const scrollTop = Math.floor(document.documentElement.scrollTop);
    const scrollMax = Math.floor(
      document.documentElement.scrollHeight - document.documentElement.clientHeight,
    );
    if (scrollMax !== 0 && existNext && scrollMax === scrollTop) {
      fetchNextPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setCurrentReadOffset);

    return () => {
      window.removeEventListener('scroll', setCurrentReadOffset);
    };
  }, [setCurrentReadOffset]);

  useMemo(() => {
    if (!error && !loading && data) {
      setArticleElements([...data.post]);
    }
  }, data);

  if (loading) {
    return (<div className="Article-list">
      <SkeletonArticleCard />
      <SkeletonArticleCard />
      <SkeletonArticleCard />
      <SkeletonArticleCard />
    </div>);
  }
  if (error) {
    console.error('TCL: error', error);
    return `Error! ${error.message}`;
  }

  const onClickArticle = (e,articleId) => {
    if(e.target.className==="Article-tag-link"){
      history.push(`/tag/${e.target.id}`);
      return;
    }
    history.push(`/post/${articleId}`);
  };

  return (
    <div className="Article-list">
      {articleElements !== undefined &&
        articleElements !== null &&
        articleElements.map((articleElement) => {
          return (
              <ArticleCard
                key={articleElement._id}
                id={articleElement._id}
                title={articleElement.title}
                date={articleElement.modifyDate}
                desc={articleElement.description}
                tags={articleElement.tags}
                onClickArticle={onClickArticle}
              />
          );
        })}
    </div>
  );
};

export default ArticleList;
