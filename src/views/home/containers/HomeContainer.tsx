import React, {useEffect} from 'react';
import styled from 'styled-components'
import {getCollectionFB} from "../../../firebase/query";
import {useDispatch, useSelector} from "react-redux";
import {setCollections} from "../../../redux/blog/slice";
import MainList from "../../.shared/list/MainList";
import BlogItem from "../../.shared/item/BlogItem";
import {RootState} from "../../../redux/store";
import { IBlogData} from "../../../interfaces/blog.interfaces";



const HomeContainer = () => {
    const dispatch = useDispatch();
    const list = useSelector((state : RootState) => state.blog.list)



    useEffect(  () => {
        const getBlogs = async () => {
            const result = await getCollectionFB('blog');
            dispatch(setCollections(result))

        }
        getBlogs();
    }, [dispatch]);
    return(
        <Container>
            <MainList data={list}>
                {(data : IBlogData, index : number) => <BlogItem data={data} index={index}/>}
            </MainList>
        </Container>
    )
};

const Container = styled.div`
    padding-top: 50px;

`;

export default HomeContainer;
