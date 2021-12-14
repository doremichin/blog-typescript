import React from 'react';
import styled from 'styled-components'
import {blogData} from "../../../interfaces/blog.interfaces";
import {Link} from "react-router-dom";

interface Props {
    data : blogData,
    index : number
}

const BlogItem = ({data, index} : Props) => {
    return(
        <Container to={`/detail/${data.id}`}>
            <Thumb>

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
  width: 100%;
  height: 200px;
  background-color: #eee;
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
