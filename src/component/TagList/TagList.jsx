import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { LOOK_TAGS } from '../../graphql/queries/postQueries';
import './TagList.scss';

const TagButton = styled.span`
  display: inline-block;
  margin: 0 2px;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  padding: 3px 8px;
  font-size: 0.9em;
  color: #707070;

  &:hover {
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const TagList = () => {
  const { loading, error, data } = useQuery(LOOK_TAGS);
  const history = useHistory();
  const onClickTagButton = (e) => {
    const tagId = e.target.getAttribute('data-index');
    history.push(`/tag/${tagId}`);
  };

  if (loading) {
    return 'Loading...';
  }
  if (error) {
    console.error('TCL: error', error);
    return `Error! ${error.message}`;
  }
  return (
    <div className="TagListBox">
      <div className="TagListHead">
        <Typography>Tags</Typography>
      </div>
      {!loading &&
        data &&
        data.Tags.map((tag) => {
          return (
            <TagButton onClick={onClickTagButton} key={tag._id} data-index={tag._id}>
              {tag.tagName}
            </TagButton>
          );
        })}
    </div>
  );
};

export default TagList;
