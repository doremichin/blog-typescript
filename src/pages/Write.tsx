import React from 'react';
import styled from 'styled-components';

import WriteContainer from '../views/write/containers/WriteContainer';
import LoadingScreen from '../views/_shared/screen/LoadingScreen';

function Write() {
  return (
    <Container>
      <WriteContainer />
      <LoadingScreen />
    </Container>
  );
}

const Container = styled.div`

`;

export default Write;
