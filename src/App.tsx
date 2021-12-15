import React from 'react';
import styled from 'styled-components'
import Routes from "./Routes";
import Header from "./views/.shared/header";
import {GlobalStyled} from "./styled/GlobalStyled";
import {useAuthState} from "./auth/useAuthState";

const App = () => {
    useAuthState();
    return(
        <Container>
            <GlobalStyled/>
            <Header/>
            <Routes/>
        </Container>
    )
};

const Container = styled.div`

`;

export default App;
