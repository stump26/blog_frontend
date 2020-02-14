import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';

import PostBody from '../component/PostBody';
import { SkeletonPost } from '../component/Skeleton';
import PostComments from '../component/PostComments';
import { GET_POST_BYID } from '../graphql/queries/postQueries';

const Post = ({ match: { params } }) => {
  const { loading, error, data } = useQuery(GET_POST_BYID, {
    variables: { id: params.id },
    fetchPolicy: 'cache-and-network',
  });

  // Query on loading..
  if (loading) {
    return <SkeletonPost />;
  }

  // Quering Error
  if (!loading && error) {
    console.error(error);
    return <div>bad</div>;
  }

  // GET_POST_BYID 결과 구조분해
  const { _id, title, modifyDate, description, tags } = data.post_BY_ID;
  const markdownRegExp = /!?\[.*?\]\(.*?\)|<.*?>|\*.*?\*|#+|\t+|\n|[\s]{2,}|`{3}.*?`{3}/g;
  const extrectDescription = description.replace(markdownRegExp, '').slice(0, 150) + '...';
  const taglist = tags.reduce((acc, cur) => {
    return [...acc, cur.tagName];
  }, []);
  return (
    <>
      <Helmet encodeSpecialCharacters={true} titleTemplate="%s | Stumpark's blog">
        <meta name="description" content={extrectDescription} />
        <meta name="Keywords" content={taglist.join(', ')} />
        <title>{title}</title>
        <meta property="og:url" content={`https://blog.stumpark.co.kr/post/${_id}`} />
        <meta name="og:title" content={`${title} | Stumpark's blog`} />
        <meta name="og:description" content={extrectDescription} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={extrectDescription} />
      </Helmet>
      <PostBody
        postID={params.id}
        title={title}
        modifyDate={modifyDate}
        description={description}
      />
      <PostComments
        url={`https://blog.stumpark.co.kr/post/${_id}`}
        identifier={_id}
        title={title}
      />
    </>
  );
};

export default Post;
