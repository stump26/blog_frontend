import React from 'react';
import ReactLoading from 'react-loading';
import { Markdown } from 'react-showdown';
import { useQuery } from '@apollo/react-hooks';
import { Divider } from '@material-ui/core';

import { GET_POST_BYID } from 'graphql/queries/postQueries';
import './PostBody.scss';

const PostBody = ({ postID }) => {
  const { loading, error, data } = useQuery(GET_POST_BYID, {
    variables: { id: postID },
  });
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
  const { _id, title, modifyDate, description } = data.post_BY_ID;
  // console.log ('TCL: data.post_BY_ID', data.post_BY_ID);

  // console.log ('TCL: _id', _id);
  // console.log ('TCL: title', title);
  return (
    <div className="container">
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
