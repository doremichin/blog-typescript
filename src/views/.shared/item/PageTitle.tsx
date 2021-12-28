import React from 'react';
import styled from 'styled-components'

type Props = {
    title : string
}

const PageTitle = ({title, } : Props) => {
    return(
        <Container>
            {title}
        </Container>
    )
};

const Container = styled.h2`
    max-width: 500px;
  margin: 0 auto 20px;
  text-align: center;
`;

export default PageTitle;
