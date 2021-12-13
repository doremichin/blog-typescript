import React from 'react';
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import {data} from "../../../firebase/query";
import firebase from "firebase/compat";


type FormData = {
    title: string;
    story: string;
};


const WriteForm = ({ onSubmit } : any) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                    <Label>
                        <LabelName>제목</LabelName>
                        <Input type={'text'}  {...register("title")} />
                    </Label>
                </FormItem>
                <FormItem>
                    <Label>
                        <LabelName>내용</LabelName>
                        <Textarea {...register("story")} />
                    </Label>
                </FormItem>
                <ButtonSubmit>
                    작성 완료
                </ButtonSubmit>
            </Form>
        </Container>
    )
};

const Container = styled.div`
  
`;
const Form = styled.form`
  width: 500px;
  margin: 0 auto;
`;
const FormItem = styled.div`
  
`;
const Label = styled.label`
  
`;
const LabelName = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
`;
const Textarea = styled.textarea`
  font-size: 16px;
  width: 100%;
  padding: 10px;
  min-height: 300px;
  resize: vertical;
`;
const ButtonSubmit = styled.button`
  font-size: 14px;
  color: #fff;
  background-color: #18f;
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
`;
export default WriteForm;
