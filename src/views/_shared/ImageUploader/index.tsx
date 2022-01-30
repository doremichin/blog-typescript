import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import cn from 'classnames';
import { AiOutlinePlus } from 'react-icons/ai';

type Props = {
    onChange : (e : {}) => void
    deleteImage : () => void
    defaultThumb? : string
}

function ImageUploader({ onChange, deleteImage, defaultThumb } : Props) {
  const [localUrl, setLocalUrl] = useState<any>(defaultThumb || '');
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setLocalUrl(reader.result);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
      onChange(file);
    }
  };
  const handleDelete = () => {
    setLocalUrl('');
    deleteImage();
  };

  return (
    <Container>
      <Title>썸네일</Title>
      <Label className={cn({ localUrl })}>
        {localUrl ? <img src={localUrl} alt="" /> : <AiOutlinePlus />}
        <Input type="file" onChange={handleChange} accept="image/*" id="image-input" />
      </Label>
      <ButtonWrapper>
        {localUrl && <DeleteButton onClick={handleDelete}>이미지 삭제</DeleteButton>}
        {localUrl && <EditImageButton htmlFor="image-input">이미지 수정</EditImageButton>}
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
    
`;
const Title = styled.div`
    margin-bottom: 10px;
`;
const Label = styled.label`
  background-color: #eee;
  max-width: 500px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  &.localUrl{
    width: 100%;
    height: auto;
    background-color: #fff;
  }
  img{
  }
`;
const Input = styled.input`
  display: none;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
export const Buttons = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 7px;
  border: 1px solid #eee;
  font-size: 12px;
  margin-left: 10px;
`;
const DeleteButton = styled.div`
  ${Buttons}
`;
const EditImageButton = styled.label`
  ${Buttons}
`;
export default ImageUploader;
