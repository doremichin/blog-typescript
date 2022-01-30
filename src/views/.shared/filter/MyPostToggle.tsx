import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'


export interface MyPostToggleProps {
    onChange : (value : boolean) => void
    hasUid : boolean | undefined
}

function MyPostToggle ({onChange,hasUid} : MyPostToggleProps) {

    const handleChange = (e : any) => {
        onChange(e.target.checked)
    }

    return(
        <Container className={cn({hasUid})}>
            <Label>
                내 포스팅만 보기
                <Input type={"checkbox"} onChange={handleChange} disabled={hasUid}/>
            </Label>
        </Container>
    )
};

const Container = styled.div`
    
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  color: #333;
  .hasUid & {
    color: #777;
    text-decoration: line-through;
  }
`;
const Input = styled.input`
  transform: translateY(-2px);
  width: 15px;
  height: 15px;
  margin-left: 5px;
`;

export default MyPostToggle;
