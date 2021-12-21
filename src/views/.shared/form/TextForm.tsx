import React from 'react';
import styled from 'styled-components'
import {set, useForm} from 'react-hook-form';
import {IBlogData} from "../../../interfaces/blog.interfaces";
import ImageUploader from "../ImageUploader";
import {uploadToStorage} from "../../../firebase/storage";



type FormData = {
    title: string;
    story: string;
    thumbnailUrl : string | void;
};
type Props = {
    data? : IBlogData
    submitType : string
    onSubmit : any
}


const TextForm = ({ onSubmit, data, submitType } : Props) => {
    const { register, setValue, handleSubmit, formState: { errors },watch } = useForm<FormData>();

    const onChangeImage = async (file : any) => {
        const url : string = await uploadToStorage(file)
        setValue('thumbnailUrl', url)
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                    <Label>
                        <LabelName>제목</LabelName>
                        <Input
                            type={'text'}
                            defaultValue={data?.title}
                            {...register("title")}
                        />
                    </Label>
                </FormItem>
                <FormItem>
                    <Label>
                        <LabelName>내용</LabelName>
                        <Textarea
                            defaultValue={data?.story}
                            {...register("story")}
                        />
                    </Label>
                </FormItem>
                <ImageUploader onChange={onChangeImage}/>
                <ButtonSubmit>
                    {submitType}
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
  margin-bottom: 15px;
`;
const ButtonSubmit = styled.button`
  font-size: 14px;
  color: #fff;
  background-color: #18f;
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
`;
export default TextForm;
