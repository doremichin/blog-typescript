import React from 'react';
import styled from 'styled-components'
import LoginForm from "../components/LoginForm";
import {EmailLogIn} from "../../../firebase/login";
import {useHistory} from "react-router-dom";

type LoginInfo = {
    id : string,
    password : string
}

const LoginContainer = () => {
    const history = useHistory();

    const submitLogin = ({id, password} : LoginInfo) => {
        EmailLogIn(id,password );
        history.push('/')
    }

    return(
        <Container>
            <LoginForm onSubmit={submitLogin}/>
        </Container>
    )
};

const Container = styled.div`
  
`;

export default LoginContainer;
