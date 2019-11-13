/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';

import { GET_POST_LIST } from 'graphql/queries/postQueries';
import './ArticleList.scss';

const ArticleCard = ({ id, title, date, desc, tags, onClickArticle }) => {
  return (
    <Card
      className="Article-card"
      onClick={() => {
        onClickArticle(id);
      }}
    >
      <CardContent>
        <div className="Article-card-head">
          <Typography className="Article-title" variant="h4">
            {title}
          </Typography>
          <hr className="Article-divide" />
          <div className="Article-date">{date}</div>
        </div>
        <p className="Article-desc">{desc.slice(0, 300) + '...'}</p>
        <div className="Article-Tag-list">
          {tags.map((i) => {
            return (
              <span key={i} className="Article-tag-item">
                {i}
              </span>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

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
  const fetchNextPage = async (nextPage, scrollY) => {
    setPage(nextPage);
    fetchMore({
      variables: {
        page: nextPage,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        console.log('TCL: fetchNextPage -> articleElements', articleElements);
        if (fetchMoreResult.post.length === 0) {
          setExistNext(false);
        }
        setArticleElements([...articleElements, ...fetchMoreResult.post]);
        window.scrollTo(0, scrollY);
        return fetchMoreResult.post;
      },
    });
  };

  const setCurrentReadOffset = (e) => {
    const scrollTop = Math.floor(document.documentElement.scrollTop);
    const scrollMax = Math.floor(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
    );
    console.log(scrollTop, ' / ', scrollMax);
    if (scrollMax !== 0 && existNext && scrollMax === scrollTop) {
      fetchNextPage(page + 1, scrollMax);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', setCurrentReadOffset);

    return () => {
      window.removeEventListener('scroll', setCurrentReadOffset);
    };
  }, [setCurrentReadOffset]);
  useMemo(() => {
    if (!loading) {
      setArticleElements([...data.post]);
    }
  }, data);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log('TCL: ArticleList -> articleElements', articleElements);

  const onClickArticle = (articleId) => {
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
