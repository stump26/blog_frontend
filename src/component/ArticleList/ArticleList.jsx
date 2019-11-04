import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Card, CardContent, Typography } from '@material-ui/core';

import { GET_POST_LIST } from 'graphql/queries/postQueries';
import './ArticleList.scss';

const ArticleCard = ({ title, date, desc, tags }) => {
  return (
    <Card className="Article-card">
      <CardContent>
        <div className="Article-card-head">
          <Typography className="Article-title" variant="h4">
            {title}
          </Typography>
          <hr className="Article-divide" />
          <div className="Article-date">{date}</div>
        </div>
        <p className="Article-desc">{desc}</p>
        <div className="Article-Tag-list">
          {tags.map(i => {
            return <span className="Article-tag-item">{i}</span>;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const ArticleList = () => {
  const { loading, error, data } = useQuery(GET_POST_LIST);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const articleElements = data.post;
  console.log(
    'TCL: ArticleList -> articleElements',
    articleElements,
    typeof articleElements,
  );
  return (
    <div className="Article-list">
      <ArticleCard
        title="sample1"
        date="2019. 10. 06. AM 10:20"
        desc="가나다라마바사아자카타파하"
        tags={['lol', 'test1', 'test2']}
      />
      {articleElements !== undefined &&
        articleElements !== null &&
        articleElements.map(articleElement => {
          return (
            <ArticleCard
              title={articleElement.title}
              date="2019. 10. 06. AM 10:20"
              desc={articleElement.description}
              tags={['lol', 'test1', 'test2']}
            />
          );
        })}
    </div>
  );
};

export default ArticleList;
