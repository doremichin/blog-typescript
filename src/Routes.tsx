import React from 'react';
import {Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import Detail from './pages/Detail';
import Home from "./pages/Home";
import Write from './pages/Write';
import Edit from "./pages/Edit";
import Login from "./pages/Login";

const Routes = () => {
    return(
        <Container>
            <Switch>
               <Route exact path={'/'} component={Home} />
               <Route exact path={'/write'} component={Write} />
               <Route exact path={'/login'} component={Login} />
               <Route exact path={'/detail/:id'} component={Detail} />
               <Route exact path={'/edit/:id'} component={Edit} />
            </Switch>
        </Container>
    )
};

const Container = styled.div`

`;

export default Routes;
