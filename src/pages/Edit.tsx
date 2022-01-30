import React from 'react';
import styled from 'styled-components';

import EditContainer from '../views/edit/containers/EditContainer';
import LoadingScreen from '../views/_shared/screen/LoadingScreen';

function Edit() {
  return (
    <Container>
      <EditContainer />
      <LoadingScreen />
    </Container>
  );
}

const Container = styled.div`

`;

export default Edit;
