import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {Redirect, Route} from "react-router-dom";

type Props = {
    exact: boolean
    path: string
    component: () => JSX.Element
}


function PrivateRoute (props : Props) {

    const {user, authInitialized} = useSelector((state : RootState) => state.auth)

    if(!authInitialized || !user) return <Redirect to={'/'}/>

    return(
        <Container>
            <Route {...props}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default PrivateRoute;
