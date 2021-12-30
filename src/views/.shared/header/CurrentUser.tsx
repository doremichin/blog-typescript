import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import CurrentUserMenu from "./CurrentUserMenu";
import Contain from "../common/Contain";

function CurrentUser () {
    const [isView, setView] = useState(false)
    const user = useSelector((state: RootState) => state.auth.user)

    const handleClick = () => {
        setView(!isView)
    }
    const onClickOut = () => {
        setView(false)
    }

    return(
        <Container >
            <Wrapper onClick={handleClick}>
                {user?.email}
                <Circle/>
            </Wrapper>
            {
                isView
                && <Contain onClickOut={onClickOut}><CurrentUserMenu/></Contain>
            }
        </Container>
    )
};

const Container = styled.div`
  display: inline-block;
  margin-left: 10px;
  padding: 10px 0 10px 10px;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

`;
const Circle = styled.div`
  margin-left: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #32d947;
`;
export default CurrentUser;
