import React from 'react';
import ArticleList from '../component/ArticleList';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <ArticleList />
      </div>
    </>
  );
};

export default Home;
