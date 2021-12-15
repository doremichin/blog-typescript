import React from 'react';
import styled from 'styled-components'
import {useForm} from "react-hook-form";

type FormData = {
    id: string;
    password: string;
};
type Props = {
    onSubmit : any
}


const LoginForm = ( { onSubmit } : Props ) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type={'text'} placeholder={'이메일을 입력해주세요.'} {...register("id")}/>
                <Input type={'password'} placeholder={'비밀번호를 입력해주세요.'} {...register("password")}/>
                <Button type={'submit'}>로그인</Button>
            </Form>
        </Container>
    )
};

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding-top: 50px;
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #111;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export default LoginForm;