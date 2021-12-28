import React from 'react';
import styled from 'styled-components';
import PageTitle from "../../.shared/item/PageTitle";
import SignUpForm from "../components/SignUpForm";
import {SignUpByEmail} from "../../../firebase/sign";
import {useHistory} from "react-router-dom";

type LoginInfo = {
    id : string,
    password : string
}

function SignUpContainer () {
    const history = useHistory();

    const onSubmitSignUp = async({id, password} : LoginInfo) => {
        const result = await SignUpByEmail(id,password)
        if(result) history.push('/')
    }

    return(
        <Container>
            <FormWrapper>
                <PageTitle title={'회원가입'}/>
                <SignUpForm onSubmit={onSubmitSignUp}/>
            </FormWrapper>
        </Container>
    )
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.div`
  width: 500px;
  transform: translateY(-150px);
`;

export default SignUpContainer;
