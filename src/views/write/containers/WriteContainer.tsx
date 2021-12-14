import React from 'react';
import styled from 'styled-components'
import WriteForm from "../components/WriteForm";
import {data, setDocumentFB} from "../../../firebase/query";
import {useHistory} from "react-router-dom";

const WriteContainer = () => {
    const history = useHistory();

    const handleSubmit = async (data : data) => {
        await setDocumentFB(data)
        history.push('/')
    }

    return(
        <Container>
            <WriteForm onSubmit={handleSubmit}/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;

export default WriteContainer;
