import React from 'react';
import ReactLoading from 'react-loading';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import PostBody from '../component/PostBody';
import { GET_POST_BYID } from '../graphql/queries/postQueries';

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
  if (!loading && error) {
    console.error(error);
    return <div>bad</div>;
  }

  // GET_POST_BYID 결과 구조분해
  const { _id, title, modifyDate, description, tags } = data.post_BY_ID;
  const markdownRegExp = /!?\[.*?\]\(.*?\)|<.*?>|\*.*?\*|#+|\t+|\n|[\s]{2,}|`{3}.*?`{3}/g;
  const extrectDescription = description.replace(markdownRegExp, '').slice(0, 150) + '...';

  return (
    <>
      <Helmet encodeSpecialCharacters={true} titleTemplate="%s | Stumpark's blog">
        <meta name="description" content={extrectDescription} />
        <meta name="Keywords" content={tags.join(', ')} />
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
    </>
  );
};

export default Post;
