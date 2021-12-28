import React from 'react';
import styled from 'styled-components'
import LoginContainer from "../views/login/containers/LoginContainer";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useHistory} from "react-router-dom";

const Login = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const history = useHistory();

    if(user) history.push('/');



    return(
        <Container>
            <LoginContainer/>
        </Container>
    )
};

const Container = styled.div`

`;

export default Login;
