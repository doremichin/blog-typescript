import React, {useEffect} from 'react';
import styled from 'styled-components'
import {deleteDocumentFB, getDocumentFB} from "../../../firebase/query";
import {useHistory, useParams} from "react-router-dom";
import DetailForm, { DetailFormProps } from "../components/DetailForm";
import {useDispatch, useSelector} from "react-redux";
import { setDocument } from '../../../redux/blog/slice';
import {RootState} from "../../../redux/store";


const DetailContainer = () => {
    const { id } : { id : string } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const detail = useSelector((state: RootState) => state.blog.detail)

    const deleteDocument : DetailFormProps['onClickDelete'] = async () => {
        await deleteDocumentFB('blog', id)
        history.push('/')
    }

    useEffect(() => {
        const getDetailById = async () => {
            const result = await getDocumentFB('blog',id)
            dispatch(setDocument(result));
        }
        getDetailById();
    }, [dispatch, id]);

    if(!detail) return null;

    return(
        <Container>
            <DetailForm data={detail} onClickDelete={deleteDocument}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default DetailContainer;
