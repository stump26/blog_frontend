import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import ArticleList from '../component/ArticleList';
import TagList from '../component/TagList';

const HomeContainer = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <>
      <Helmet encodeSpecialCharacters={true} titleTemplate="Stumpark's blog">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta http-equiv="Content-Script-Type" content="text/javascript" />
        <meta http-equiv="Content-Style-Type" content="text/css" />
        <meta name="description" content="Stumpark의 삽질 저장소 blog" />
        <meta name="by" content="Stumpark @stump26" />
        <meta name="og:title" content="Stumpark's blog" />
        <meta property="og:site_name" content="Stumpark's blog" />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://blog.stumpark.com/" />
        <meta property="og:image" content="%PUBLIC_URL%/img/stumpark/logo128.jpg" />
        <meta property="og:description" content="Stumpark의 삽질 저장소 blog" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <title>Stumpark's blog</title>
      </Helmet>
      <HomeContainer className="home-container">
        <ArticleList />
        <TagList />
      </HomeContainer>
    </>
  );
};

export default Home;
