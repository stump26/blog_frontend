import React from 'react';
import ReactLoading from 'react-loading';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';

import PostBody from 'component/PostBody';
import { GET_POST_BYID } from 'graphql/queries/postQueries';

const Post = ({ match: { params } }) => {
  const { loading, error, data } = useQuery(GET_POST_BYID, {
    variables: { id: params.id },
    fetchPolicy: 'cache-and-network',
  });

  // Query on loading..
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

  // Quering Error
  if (error) {
    console.error(error);
    return <div>bad</div>;
  }

  // GET_POST_BYID 결과 구조분해
  const { _id, title, modifyDate, description } = data.post_BY_ID;

  return (
    <>
      <Helmet></Helmet>
      <PostBody
        postID={params.id}
        title={title}
        modifyDate={modifyDate}
        description={description}
      />
    </>
  );
};

export default Post;
