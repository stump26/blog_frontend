import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { LOOK_TAGS } from '../../graphql/queries/postQueries';

const TagListBox = styled.div``;
const TagButton = styled.span`
  display: block;
  margin: 0 2px;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  padding: 3px 8px;
`;

const TagList = () => {
  const { loading, error, data } = useQuery(LOOK_TAGS);
  if (loading) {
    return 'Loading...';
  }
  if (error) {
    console.error('TCL: error', error);
    return `Error! ${error.message}`;
  }
  return (
    <TagListBox>
      {!loading &&
        data &&
        data.Tags.map((tag) => {
          return <TagButton>{tag.tagName}</TagButton>;
        })}
    </TagListBox>
  );
};

export default TagList;
