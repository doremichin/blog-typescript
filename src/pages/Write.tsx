import React from 'react';
import styled from 'styled-components'
import WriteContainer from "../views/write/containers/WriteContainer";
import LoadingScreen from "../views/.shared/screen/LoadingScreen";

const Write = () => {
    return(
        <Container>
            <WriteContainer/>
            <LoadingScreen/>
        </Container>
    )
};

const Container = styled.div`

`;

export default Write;
