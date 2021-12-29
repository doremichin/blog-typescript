import React from 'react';
import styled from 'styled-components'
import EditContainer from "../views/edit/containers/EditContainer";
import LoadingScreen from "../views/.shared/screen/LoadingScreen";

const Edit = () => {
    return(
        <Container>
            <EditContainer/>
            <LoadingScreen/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;

`;

export default Edit;
