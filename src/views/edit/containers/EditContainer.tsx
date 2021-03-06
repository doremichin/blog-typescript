import React from 'react';
import styled from 'styled-components'
import TextForm from "../../.shared/form/TextForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useHistory, useParams} from "react-router-dom";
import PageTitle from "../../.shared/item/PageTitle";
import {IData, updateDocumentFB} from "../../../firebase/query";
import LoadingScreen from '../../.shared/screen/LoadingScreen';

const EditContainer = () => {
    const history = useHistory();
    const {id} : any = useParams();
    const { detail, uploadingImage } = useSelector((state: RootState) => ({
        detail : state.blog.detail,
        uploadingImage : state.blog.uploadingImage
    }))

    if(Object.keys(detail).length < 1) {
        history.push('/')
    }
    const handleSubmit = async (data : IData) => {
       await updateDocumentFB('blog', id, data )
        history.push('/')
    }
    return(
        <Container>
            <PageTitle title={'수정 페이지'}/>
            <TextForm onSubmit={handleSubmit} data={detail} submitType={'수정 완료'} defaultThumb={detail.thumbnailUrl}/>
            <LoadingScreen uploadingImage={uploadingImage}/>
        </Container>
    )
};

const Container = styled.div`
  padding: 50px 0;
`;

export default EditContainer;
