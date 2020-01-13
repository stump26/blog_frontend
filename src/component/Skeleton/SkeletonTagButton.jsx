import React from 'react';
import styled from 'styled-components';

const SkeletonTagButton = styled.span`
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

export default SkeletonTagButton;