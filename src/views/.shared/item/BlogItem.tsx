import React from 'react';
import styled from 'styled-components'
import {IBlogData} from "../../../interfaces/blog.interfaces";
import {Link, useHistory} from "react-router-dom";

interface Props {
    data : IBlogData,
    index : number
}

const BlogItem = ({data, index} : Props) => {

    const history = useHistory();
    const onClick = () => {
        history.push(`/detail/${data.id}`)
    }

    return(
        <Container onClick={onClick}>
            <Thumb>
                {
                    data.thumbnailUrl
                    && <img src={data.thumbnailUrl} alt=""/>
                }
            </Thumb>
            <Desc>
                <Title>
                    {data.title}
                </Title>
                <Story>
                    {data.story}
                </Story>
                <Author>
                    By {data.email}
                </Author>
            </Desc>
        </Container>
    )
};

const Container = styled.div`
    cursor: pointer;
  box-shadow:  1px 1px 5px #eee;
`;
const Thumb = styled.div`
  background-color: #eee;
  min-height: 140px;
  img{
    width: 100%;
    height: 140px;
    object-fit: cover;
  }
`;
const Desc = styled.div`
  padding: 20px 10px;
  border: 1px solid #eee;
  border-top: none;
`;
const Title = styled.div`
  margin-bottom: 15px;
`;
const Story = styled.div`
  font-size: 14px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 15px;
`;
const Author = styled.div`
  text-align: right;
  color: #999;
  font-size: 12px;
`;
export default BlogItem;
