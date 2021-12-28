import React, {ReactNode} from 'react';
import styled from 'styled-components'
import {IBlogData} from "../../../interfaces/blog.interfaces";
import {ContentContainer} from "../layout/Layout.Styled";

interface Props {
    data : IBlogData[],
    children : any
}

const MainList = ({data, children} : Props) => {

    return(
        <Container>
            <ContentContainer>
                <Row>
                    {
                        data.map((item, index) => (
                                <Col key={item.id || index}>
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
