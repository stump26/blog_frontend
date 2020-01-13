import React from 'react';
import styled from 'styled-components';

const SkeletonTagButton = styled.span`
  display: inline-block;
  margin: 4px 2px;
  height: 0.9rem;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  padding: 3px 8px;
  background-color: #e0e0e0;

  animation-name: loading;
  animation-duration: 1.7s;
  animation-iteration-count: infinite;

  @keyframes loading {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const randomSizeTag = () => {
  const styleGenerate = () => {
    return { width: Math.floor(Math.random() * 20) + 20 };
  };
  return <SkeletonTagButton style={styleGenerate()} />;
};

const SkeletonTagButtons = () => {
  let list = [];
  for (let i = 0; i < Math.floor(Math.random() * 40) + 30; i += 1) {
    list.push(randomSizeTag());
  }
  return list;
};

export default SkeletonTagButtons;
