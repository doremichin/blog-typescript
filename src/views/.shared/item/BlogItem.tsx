import React from 'react';
import styled from 'styled-components'
import {IBlogData} from "../../../interfaces/blog.interfaces";
import {Link} from "react-router-dom";

interface Props {
    data : IBlogData,
    index : number
}

const BlogItem = ({data, index} : Props) => {
    return(
        <Container to={`/detail/${data.id}`}>
            <Thumb>
                <img src={data.thumbnailUrl} alt=""/>
            </Thumb>
            <Desc>
                <Title>
                    {data.title}
                </Title>
                <Story>
                    {data.story}
                </Story>
            </Desc>
        </Container>
    )
};

const Container = styled(Link)`
  display: block;
`;
const Thumb = styled.div`
  background-color: #eee;
  img{
    width: 100%;
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
`;
export default BlogItem;
