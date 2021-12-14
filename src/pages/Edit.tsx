import React from 'react';
import styled from 'styled-components'
import EditContainer from "../views/edit/containers/EditContainer";

const Edit = () => {
    return(
        <Container>
            <EditContainer/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;

`;

export default Edit;
