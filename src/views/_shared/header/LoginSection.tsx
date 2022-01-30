import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import CurrentUser from './CurrentUser';

function LoginSection() {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) return <NavItem to="/login">Login</NavItem>;

  return <CurrentUser />;
}

const NavItem = styled(Link)`
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
`;

export default LoginSection;
