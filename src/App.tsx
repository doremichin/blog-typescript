import React from 'react';
import styled from 'styled-components'
import Routes from "./Routes";
import Header from "./views/.shared/header";
import {GlobalStyled} from "./styled/GlobalStyled";

const App = () => {
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
