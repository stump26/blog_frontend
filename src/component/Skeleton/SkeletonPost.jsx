import React from 'react';
import { Divider } from '@material-ui/core';

import './SkeletonPost.scss';

const SkeletonPost = () => {
  const listDesc = Array.apply(null, Array(Math.floor(Math.random() * 20) + 10)).map(() => {
    return <div>{'   '}</div>;
  });
  return (
    <div className="postbody-container">
      <div className="post-title-bg-skeleton">
        <div id="post-title">{'   '}</div>
      </div>
      <Divider className="titie-section-divider" />
      <div className="modify-date-skeleton">{'   '}</div>
      <div className="post-desc-skeleton">{listDesc}</div>
    </div>
  );
};

export default SkeletonPost;
