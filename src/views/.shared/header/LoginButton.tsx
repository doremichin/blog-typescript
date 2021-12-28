import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import { EmailLogout } from "../../../firebase/sign";
import { setUserInfo } from '../../../redux/auth/slice';

const LoginButton = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const dispatch = useDispatch();
    const handleLogout = () => {
        EmailLogout();
        dispatch(setUserInfo(null))
    }

    if(!user) return <NavItem to={'/login'}>Login</NavItem>;

    return <LogoutButton onClick={handleLogout}>Logout</LogoutButton>

};


const NavItem = styled(Link)`
  margin: 0 10px;
  padding: 10px;
`;
const LogoutButton = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 0 10px;
  padding: 10px;
`;
export default LoginButton;
