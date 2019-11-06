/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useHistory } from 'react-router-dom';
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
          {tags.map(i => {
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
  const { loading, error, data } = useQuery(GET_POST_LIST);
  const history = useHistory();
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const articleElements = data.post;
  console.log('TCL: ArticleList -> articleElements', articleElements);

  const onClickArticle = articleId => {
    console.log('TCL: articleId', articleId);
    history.push(`/post/${articleId}`);
  };

  return (
    <div className="Article-list">
      {articleElements !== undefined &&
        articleElements !== null &&
        articleElements.map(articleElement => {
          return (
            <ArticleCard
              key={articleElement._id}
              id={articleElement._id}
              title={articleElement.title}
              date="2019. 10. 06. AM 10:20"
              desc={articleElement.description}
              tags={['lol', 'test1', 'test2']}
              onClickArticle={onClickArticle}
            />
          );
        })}
    </div>
  );
};

export default ArticleList;
