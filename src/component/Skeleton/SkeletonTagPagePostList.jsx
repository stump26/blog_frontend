import React from 'react';
import SkeletonArticleCard from './SkeletonArticleCard';

const SkeletonTagPagePostList = () => {
  return (
    <>
      <SkeletonArticleCard />
      <SkeletonArticleCard />
      <SkeletonArticleCard />
    </>
  );
};

export default SkeletonTagPagePostList;
