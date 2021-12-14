import React from 'react';
import styled, { css } from 'styled-components'
import {blogData} from "../../../interfaces/blog.interfaces";

interface Props {
    data : blogData
    onClickDelete : () => void
}

const DetailForm : React.FC<Props> = ({ data,onClickDelete }) => {
    return(
        <Container>
            <Content>
                <Title>
                    {data.title}
                </Title>
                <Story>
                    {data.story}
                </Story>
                <ButtonBox>
                    <ButtonDelete onClick={onClickDelete}>삭제</ButtonDelete>
                    <ButtonEdit>수정</ButtonEdit>
                </ButtonBox>
            </Content>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;
const Content = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
const Title = styled.h2`
  margin-bottom: 20px;
`;
const Story = styled.div`
  margin-bottom: 30px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Button = css`
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 3px;
  color: #fff;
`
const ButtonDelete = styled.div`
  ${Button};
  background-color: #ea3e3e;
`;
const ButtonEdit = styled.div`
  ${Button};
  background-color: #18f;
  margin-left: 20px;

`;
export default DetailForm;
