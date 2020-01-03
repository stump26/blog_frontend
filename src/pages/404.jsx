import React from 'react';
import styled from 'styled-components';

import img404 from '../assets/404Page.png';

const NotFoundPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  height: 88vh;
  align-items: center;
  justify-items: center;
`;
const Img404Element = styled.img`
  margin: auto;
`;

const Page404 = () => {
  return (
    <NotFoundPageContainer>
      <Img404Element src={img404} alt="!!! 404 NOT FOUND !!!" />
    </NotFoundPageContainer>
  );
};

export default Page404;
