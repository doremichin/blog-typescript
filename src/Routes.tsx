import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Detail from './pages/Detail';
import Home from './pages/Home';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/write" component={Write} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/detail/:id" component={Detail} />
        <PrivateRoute exact path="/edit/:id" component={Edit} />
      </Switch>
    </Container>
  );
}

const Container = styled.div`

`;

export default Routes;
