import React, { useContext, useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Markdown } from 'react-showdown';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Divider, Fab } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import jwt from 'jsonwebtoken';

import { GET_POST_BYID } from 'graphql/queries/postQueries';
import { UserInfoContext } from 'context';
import './PostBody.scss';
import { setState } from 'expect/build/jestMatchersObject';

const PostBody = ({ postID }) => {
  const history = useHistory();
  const [author, setAuthor] = useState(false);
  const { decodeJWTPayload } = useContext(UserInfoContext);
  const { loading, error, data } = useQuery(GET_POST_BYID, {
    variables: { id: postID },
    fetchPolicy: 'cache-and-network',
  });
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const { _id: userId, username, authority } = jwt.decode(token);
      setAuthor(authority);
    }
  }, []);
  if (loading) {
    return (
      <ReactLoading
        className="loding-symbole"
        type="bars"
        color="#3376FB"
        width={100}
        height={100}
      />
    );
  }
  if (error) {
    // console.log ('TCL: error', error);
    return <div>bad</div>;
  }
  const onClickModify = () => {
    history.push(`/editor/${postID}`);
  };
  const { _id, title, modifyDate, description } = data.post_BY_ID;

  return (
    <div className="container">
      {author !== false && author < 1 && (
        <Fab
          className="ModifyBtn"
          size="small"
          aria-label="edit"
          onClick={onClickModify}
        >
          <EditIcon />
        </Fab>
      )}
      <div className="post-title-bg">
        <h1 id="post-title">{title}</h1>
      </div>
      <Divider className="titie-section-divider" />
      <div className="modify-date">{modifyDate}</div>
      <div className="post-desc">
        <Markdown markup={description} />
      </div>
    </div>
  );
};

export default PostBody;
