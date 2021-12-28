import React from 'react';
import styled from 'styled-components'
import TextForm from "../../.shared/form/TextForm";
import {IData, setDocumentFB} from "../../../firebase/query";
import {useHistory} from "react-router-dom";
import PageTitle from "../../.shared/item/PageTitle";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

const WriteContainer = () => {
    const history = useHistory();
    const user  = useSelector((state: RootState) => state.auth?.user);

    const handleSubmit = async (data : IData ) => {
        await setDocumentFB(data ,user)
        history.push('/')
    }

    return(
        <Container>
            <PageTitle title={'새글 작성'}/>
            <TextForm onSubmit={handleSubmit} submitType={'작성 완료'}/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;

export default WriteContainer;
