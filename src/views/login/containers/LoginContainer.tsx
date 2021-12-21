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

    const submitLogin = async ({id, password} : LoginInfo) => {
        const result = await EmailLogIn(id,password );
        if(result) history.push('/')
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
