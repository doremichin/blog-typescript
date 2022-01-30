import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { EmailLogout } from '../../../firebase/sign';
import { setUserInfo } from '../../../redux/auth/slice';

function CurrentUserMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    EmailLogout();
    dispatch(setUserInfo(null));
  };

  return (
    <Container>
      <List>
        <ListItem onClick={handleLogout}>Logout</ListItem>
        <ListItem onClick={handleLogout}>Logout</ListItem>
        <ListItem onClick={handleLogout}>Logout</ListItem>
      </List>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 100;
  bottom: -120px;
  right: 0;
`;
const List = styled.ul`
  width: 120px;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgba(126, 126, 126, 0.3);
`;
const ListItem = styled.li`
  padding: 8px 0;
  text-align: center;
  cursor: pointer;
`;
export default CurrentUserMenu;
