import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, Fab } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import jwt from 'jsonwebtoken';

import MDRenderer from 'component/commons/MarkdownRenderer';
import './PostBody.scss';

const PostBody = ({ postID, title, modifyDate, description }) => {
  const history = useHistory();
  const [author, setAuthor] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const { _id: userId, username, authority } = jwt.decode(token);
      setAuthor(authority);
    }
  }, []);
  const onClickModify = () => {
    history.push(`/editor/${postID}`);
  };

  return (
    <div className="container">
      {author !== false && author < 1 && (
        <Fab className="ModifyBtn" size="small" aria-label="edit" onClick={onClickModify}>
          <EditIcon />
        </Fab>
      )}
      <div className="post-title-bg">
        <h1 id="post-title">{title}</h1>
      </div>
      <Divider className="titie-section-divider" />
      <div className="modify-date">
        {modifyDate}
        <meta itemprop="dateModified" content={modifyDate}></meta>
      </div>
      <div className="post-desc" itemscope itemtype="http://schema.org/BlogPosting">
        <MDRenderer markup={description} />
      </div>

      <div>
        <meta itemprop="mainEntityOfPage" content={`/post/${postID}`} />
        <meta itemprop="name" content={title} />
        <div itemprop="publisher" itemscope itemtype="http://schema.org/Organization">
          <meta itemprop="name" content="Stumpark's blog" />
          <div itemprop="logo" itemscope itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="{https://blog.stumpark.com/logo512.png}" />
          </div>
        </div>
        <div itemprop="author" itemscope itemtype="http://schema.org/Person">
          <meta itemprop="name" content="Outsider" />
          <meta itemprop="url" content="/" />
        </div>
      </div>
    </div>
  );
};

export default PostBody;
