import React from 'react';
import {Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import Home from "./pages/Home";
import Write from './pages/Write';

const Routes = () => {
    return(
        <Container>
            <Switch>
               <Route exact path={'/'} component={Home} />
               <Route exact path={'/write'} component={Write} />
            </Switch>
        </Container>
    )
};

const Container = styled.div`

`;

export default Routes;
