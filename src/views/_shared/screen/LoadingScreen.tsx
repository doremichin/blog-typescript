import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import cn from 'classnames';

import { RootState } from '../../../redux/store';

function LoadingScreen() {
  const uploadingImage = useSelector((state: RootState) => state.blog.uploadingImage);

  return (
    <Container className={cn({ uploadingImage })}>
      <LoadingIcon>
        <img src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" alt="" />
      </LoadingIcon>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  &.uploadingImage{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #00000060;
  }
`;
const LoadingIcon = styled.div`
  width: 40px;
  height: 40px;
`;
export default LoadingScreen;
