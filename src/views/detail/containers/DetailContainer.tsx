import React, {useEffect} from 'react';
import styled from 'styled-components'
import {deleteDocumentFB, getDocumentFB} from "../../../firebase/query";
import {useHistory, useParams} from "react-router-dom";
import DetailForm from "../components/DetailForm";
import {useDispatch, useSelector} from "react-redux";
import { setDocument } from '../../../redux/blog/slice';
import {RootState} from "../../../redux/store";


const DetailContainer = () => {
    const { id } : any  = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const detail = useSelector((state: RootState) => state.blog.detail)

    const getDetailById = async () => {
        const result = await getDocumentFB('blog',id)
        dispatch(setDocument(result));
    }
    const deleteDocument = async () => {
        await deleteDocumentFB('blog', id)
        history.push('/')
    }
    useEffect(() => {
        getDetailById();
    }, []);
    console.log(detail)

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
