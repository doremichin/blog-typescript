import React from 'react';
import styled from 'styled-components'
import { useForm} from 'react-hook-form';
import {IBlogData} from "../../../interfaces/blog.interfaces";
import ImageUploader from "../ImageUploader";
import {uploadToStorage} from "../../../firebase/storage";
import {useDispatch} from "react-redux";
import {checkLoading} from "../../../redux/blog/slice";
import FormMessage from "../message/FormMessage";

type FormData = {
    title: string;
    story: string;
    thumbnailUrl : string | void;
};
type Props = {
    data? : IBlogData
    submitType : string
    onSubmit : any
    defaultThumb? : string
}


const TextForm = ({ onSubmit, data, submitType ,defaultThumb} : Props) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const dispatch = useDispatch()

    const onChangeImage = async (file : any) => {
        dispatch(checkLoading())
        const url : string = await uploadToStorage(file)
        setValue('thumbnailUrl', url)
    }
    const deleteImage = () : void => {
        setValue('thumbnailUrl', '')
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
                            {...register("title", {
                                required : true,
                            })}
                        />
                        <FormMessage type={errors.title?.type}/>
                    </Label>
                </FormItem>
                <FormItem>
                    <Label>
                        <LabelName>내용</LabelName>
                        <Textarea
                            defaultValue={data?.story}
                            {...register("story",{
                                required : true,
                            })}
                        />
                        <FormMessage type={errors.story?.type}/>
                    </Label>
                </FormItem>
                <ImageUploader onChange={onChangeImage} deleteImage={deleteImage} defaultThumb={defaultThumb}/>
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
  display: block;
  margin-bottom: 20px;

`;
const LabelName = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 10px;
  margin-bottom: 4px;
  outline: none;
`;
const Textarea = styled.textarea`
  font-size: 15px;
  width: 100%;
  padding: 10px;
  min-height: 300px;
  resize: vertical;
  margin-bottom: 4px;
  outline: none;
`;
const ButtonSubmit = styled.button`
  font-size: 14px;
  color: #fff;
  background-color: #18f;
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;
export default TextForm;
