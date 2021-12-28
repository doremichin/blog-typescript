import React from 'react';
import styled from 'styled-components'
import Routes from "./Routes";
import Header from "./views/.shared/header";
import {GlobalStyled} from "./styled/GlobalStyled";
import {useAuthState} from "./auth/useAuthState";
import WriteButton from "./views/write/components/WriteButton";

const App = () => {
    useAuthState();
    return(
        <Container>
            <GlobalStyled/>
            <Header/>
            <Routes/>
            <WriteButton/>
        </Container>
    )
};

const Container = styled.div`

`;

export default App;
