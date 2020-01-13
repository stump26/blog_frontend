import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, Fab } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import jwt from 'jsonwebtoken';

import MDRenderer from '../commons/MarkdownRenderer';
import { ssrEnabled } from '../../lib/util';
import './PostBody.scss';

const PostBody = ({ postID, title, modifyDate, description }) => {
  const history = useHistory();
  const [author, setAuthor] = useState(false);
  if (process.browser) {
    useEffect(() => {
      const token = ssrEnabled ? null : sessionStorage.getItem('token');
      if (token) {
        const { _id: userId, username, authority } = jwt.decode(token);
        setAuthor(authority);
      }
    }, []);
  }
  const onClickModify = () => {
    history.push(`/editor/${postID}`);
  };

  return (
    <div className="postbody-container">
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
        <meta itemProp="dateModified" content={modifyDate}></meta>
      </div>
      <div className="post-desc" itemScope itemType="http://schema.org/BlogPosting">
        <MDRenderer markup={description} />
      </div>

      <div>
        <meta itemProp="mainEntityOfPage" content={`/post/${postID}`} />
        <meta itemProp="name" content={title} />
        <div itemProp="publisher" itemScope itemType="http://schema.org/Organization">
          <meta itemProp="name" content="Stumpark's blog" />
          <div itemProp="logo" itemScope itemType="http://schema.org/ImageObject">
            <meta itemProp="url" content="{https://blog.stumpark.com/logo512.png}" />
          </div>
        </div>
        <div itemProp="author" itemScope itemType="http://schema.org/Person">
          <meta itemProp="name" content="Stumpark" />
          <meta itemProp="url" content="/" />
        </div>
      </div>
    </div>
  );
};

export default PostBody;
