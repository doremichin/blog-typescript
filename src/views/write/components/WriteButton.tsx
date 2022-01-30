import React from 'react';
import styled from 'styled-components';
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';

function WriteButton() {
  const { user, authInitialized } = useSelector((state: RootState) => state.auth);

  if (!authInitialized || !user) return null;

  return (
    <Container>
      <ToWrite to="/write">
        <BsPencil />
      </ToWrite>
    </Container>
  );
}

const Container = styled.div`

`;
const ToWrite = styled(Link)`
  position: fixed;
  bottom: 80px;
  right: 60px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 24px;
  color: #fff;
  background-color: #18f;
  border-radius: 50%;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
export default WriteButton;
