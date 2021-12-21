import React, {useState} from 'react';
import styled from 'styled-components';
import {IBlogData} from "../../../interfaces/blog.interfaces";

type Props = {
    onChange? : any
}

function ImageUploader ({onChange} : Props) {
    const [localUrl , setLocalUrl] = useState<any>('');
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        const reader  = new FileReader();
        reader.addEventListener("load", function () {
            setLocalUrl(reader.result)
        }, false);
        if (file) {
            reader.readAsDataURL(file);
            onChange(file)
        }
    }
    return(
        <Container>
            {localUrl && <img src={localUrl} alt=""/>}
            <Input type={'file'} onChange={handleChange}/>
        </Container>
    )
};

const Container = styled.div`

`;
const Input = styled.input`
  
`;
export default ImageUploader;
