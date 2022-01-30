import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import SignUpContainer from '../views/signup/containers/SignUpContainer';
import { RootState } from '../redux/store';

function SignUp() {
  const user = useSelector((state: RootState) => state.auth.user);
  const history = useHistory();

  if (user) history.push('/');
  return (
    <Container>
      <SignUpContainer />
    </Container>
  );
}

const Container = styled.div`

`;

export default SignUp;
