import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import { EmailLogout } from "../../../firebase/sign";
import { setUserInfo } from '../../../redux/auth/slice';
import CurrentUser from "./CurrentUser";

const LoginSection = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    // const dispatch = useDispatch();
    //
    // const handleLogout = () => {
    //     EmailLogout();
    //     dispatch(setUserInfo(null))
    // }

    if(!user) return <NavItem to={'/login'}>Login</NavItem>;

    return <CurrentUser/>

};


const NavItem = styled(Link)`
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
`;

export default LoginSection;
