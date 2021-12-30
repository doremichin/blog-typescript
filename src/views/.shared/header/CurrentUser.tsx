import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

function CurrentUser () {
    const user = useSelector((state: RootState) => state.auth.user)

    return(
        <Container>
            <Wrapper>
                {user?.email}
                <Circle/>
            </Wrapper>
        </Container>
    )
};

const Container = styled.div`
  display: inline-block;
  margin-left: 10px;
  padding: 10px 0 10px 10px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Circle = styled.div`
  margin-left: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #32d947;
`;
export default CurrentUser;
