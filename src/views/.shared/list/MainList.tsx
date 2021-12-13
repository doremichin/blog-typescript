import React from 'react';
import styled from 'styled-components'
import {blogData} from "../../../interfaces/blog.interfaces";
import {ContentContainer} from "../layout/Layout.Styled";

interface Props {
    data : blogData[],
    children : any
}

const MainList = ({data, children} : Props) => {

    return(
        <Container>
            <ContentContainer>
                <Row>
                    {
                        data.map((item, index) => (
                                <Col>
                                    {children(item, index)}
                                </Col>
                            )
                        )
                    }
                </Row>
            </ContentContainer>
        </Container>
    )
};

const Container = styled.div`

`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  padding: 0 10px;
  width: 33.33%;
  margin-bottom: 20px;
`;
export default MainList;
