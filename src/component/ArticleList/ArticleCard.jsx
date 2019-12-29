import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ArticleCard = ({ id, title, date, desc, tags, onClickArticle }) => {
  // filter Markdown syntex
  const markdownRegExp = /!?\[.*?\]\(.*?\)|<.*?>|\*.*?\*|#+|\t+|\n|[\s]{2,}|`{3}.*?`{3}/gi;
  const sampleDescription = desc.replace(markdownRegExp, '').slice(0, 200) + '...';
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
        <p className="Article-desc">{sampleDescription}</p>
        <div className="Article-Tag-list">
          {tags.map((i) => {
            return (
              <div key={i} className="Article-tag-item">
                {i}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(ArticleCard);
