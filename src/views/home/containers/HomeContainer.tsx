import React, { useEffect } from 'react';
import styled from 'styled-components'
import {getCollection} from "../../../firebase/query";

const HomeContainer = () => {

    const getBlogs = async () => {
       const result = await getCollection();
        console.log(result)
    }

    useEffect(  () => {
        getBlogs();
    }, []);
    return(
        <Container>
            HomeContainer
        </Container>
    )
};

const Container = styled.div`

`;

export default HomeContainer;
