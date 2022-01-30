import React from 'react';
import styled from 'styled-components'
import LoginForm from "../components/LoginForm";
import {EmailLogIn} from "../../../firebase/sign";
import {useHistory} from "react-router-dom";
import PageTitle from "../../.shared/item/PageTitle";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

export interface LoginInfo {
    id : string,
    password : string
}

const LoginContainer = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const history = useHistory();

    if(user) history.push('/');

    const onSubmitLogin = async ({id, password} : LoginInfo) => {
        const result = await EmailLogIn(id,password );
        if(result) history.push('/')
    }

    return(
        <Container>
            <FormWrapper>
                <PageTitle title={'로그인'}/>
                <LoginForm onSubmit={onSubmitLogin}/>
            </FormWrapper>
        </Container>
    )
};

const Container = styled.div`
  height: calc(100vh - 79px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  width: 500px;
  transform: translateY(-100px);
`;

export default LoginContainer;
