import React from 'react';
import styled from 'styled-components'
import TextForm from "../../.shared/form/TextForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useHistory, useParams} from "react-router-dom";
import PageTitle from "../../.shared/item/PageTitle";
import {Idata, updateDocumentFB} from "../../../firebase/query";

const EditContainer = () => {
    const history = useHistory();
    const {id} : any = useParams();
    const detail = useSelector((state: RootState) => state.blog.detail)
    if(Object.keys(detail).length < 1) {
        history.push('/')
    }
    const handleSubmit = async (data : Idata) => {
       await updateDocumentFB('blog', id, data )
        history.push('/')
    }
    return(
        <Container>
            <PageTitle title={'수정 페이지'}/>
            <TextForm onSubmit={handleSubmit} data={detail} submitType={'수정 완료'}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default EditContainer;
