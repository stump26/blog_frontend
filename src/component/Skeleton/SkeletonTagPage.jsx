import React from 'react';
import ReactLoading from 'react-loading';

import SkeletonTagPagePostList from './SkeletonTagPagePostList';
import './SkeletonTagPage.scss';

const SkeletonTagsPage = () => {
  return (
    <>
      <div className="TagsPageContainer">
        <div className="TagNameHead">{'   '}</div>
        <div className="TagThumbnailImg">
          <ReactLoading
            className="loding-symbole"
            type="spin"
            color="#ffffff"
            width={100}
            height={100}
          />
        </div>
        <div className="TagExplanation">
          <div>{'   '}</div>
          <div>{'   '}</div>
          <div>{'   '}</div>
          <div>{'   '}</div>
        </div>
        <SkeletonTagPagePostList />
      </div>
    </>
  );
};

export default SkeletonTagsPage;
