import React from 'react';
import styled from 'styled-components'
import TextForm from "../../.shared/form/TextForm";
import {Idata, setDocumentFB} from "../../../firebase/query";
import {useHistory} from "react-router-dom";
import PageTitle from "../../.shared/item/PageTitle";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

const WriteContainer = () => {
    const history = useHistory();
    const uid  = useSelector((state: RootState) => state.auth?.user?.uid);

    const handleSubmit = async (data : Idata ) => {
        await setDocumentFB(data ,uid)
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
