import React from 'react';
import styled from 'styled-components';
import ArticleList from '../component/ArticleList';
import TagList from '../component/TagList';

const HomeContainer = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <>
      <HomeContainer className="home-container">
        <ArticleList />
        <TagList />
      </HomeContainer>
    </>
  );
};

export default Home;
