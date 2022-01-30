import React from 'react';
import styled from 'styled-components'
import {useForm} from "react-hook-form";
import {Validate} from "../../../validate";
import FormMessage from "../../.shared/message/FormMessage";
import {LoginInfo} from "../containers/SignUpContainer";

type FormData = {
    id: string;
    password: string;
};
interface Props {
    onSubmit({id, password} : LoginInfo) : Promise<void>
}


const SignUpForm = ( { onSubmit } : Props ) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                    <Input
                        type={'text'}
                        placeholder={'이메일을 입력해주세요.'}
                        {...register("id",{
                            required : true ,
                            validate : { isValidEmail: value => Validate.isValidEmail(value)}
                        })}
                    />
                    <FormMessage type={errors.id?.type}/>
                </FormItem>
                <FormItem>
                    <Input
                        type={'password'}
                        placeholder={'비밀번호를 입력해주세요.'}
                        {...register("password",{
                            required:true ,
                            validate : { isMinLength: value => Validate.isMinLength(value,5)}
                        })}
                    />
                    <FormMessage type={errors.password?.type}/>
                </FormItem>

                <Button type={'submit'}>회원가입</Button>
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
const FormItem = styled.div`
  margin-bottom: 20px;
`;
const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 4px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #111;
  font-size: 14px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 15px;
`;

export default SignUpForm;
