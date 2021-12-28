import React from 'react';
import styled, { css } from 'styled-components'
import {IBlogData} from "../../../interfaces/blog.interfaces";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

interface Props {
    data : IBlogData
    onClickDelete : () => void
}

const DetailForm = ({ data,onClickDelete } : Props) => {
    const user = useSelector((state: RootState) => state.auth.user);

    const currentUidValidate = user?.uid ===data.uid;

    return(
        <Container>
            <Content>
                <Title>
                    {data.title}
                </Title>
                <Image>
                    <img src={data.thumbnailUrl} alt=""/>
                </Image>
                <Story>
                    {data.story}
                </Story>

                {
                    currentUidValidate
                    && (
                        <ButtonBox>
                            <ButtonDelete onClick={onClickDelete}>삭제</ButtonDelete>
                            <ButtonEdit to={`/edit/${data.id}`}>수정</ButtonEdit>
                        </ButtonBox>
                    )
                }
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
  margin-bottom: 50px;
`;
const Image = styled.div`
  max-width: 500px;
  margin-bottom: 20px;
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
const ButtonEdit = styled(Link)`
  ${Button};
  display: block;
  background-color: #18f;
  margin-left: 20px;
`;

export default DetailForm;
