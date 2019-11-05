import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

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
  return (
    <div className="Article-list">
      <ArticleCard
        title="sample1"
        date="2019. 10. 06. AM 10:20"
        desc="가나다라마바사아자카타파하"
        tags={['lol', 'test1', 'test2']}
      />
      <ArticleCard
        title="애국가"
        date="2019. 10. 03. AM 11:33"
        desc=" 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 산철리 화려강산 대한사람 대한으로 
        길이보전하세. 남산위에 저소나무 철갑을 두른듯  바람서리 불변함은 우리 기상일세 무궁화 산철리 화려강산 대한사람 
        대한으로 길이보전하세."
        tags={['lol', 'test1', 'test2']}
      />
      <ArticleCard
        title="sample1"
        date="2019. 10. 01. AM 10:20"
        desc="가나다라마바사아자카타파하"
        tags={['lol', 'test1', 'test2']}
      />
      <ArticleCard
        title="sample1"
        date="2019. 09. 06. PM 10:20"
        desc="가나다라마바사아자카타파하"
        tags={['lol', 'test1', 'test2']}
      />
    </div>
  );
};

export default ArticleList;
