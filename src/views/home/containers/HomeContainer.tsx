import React, { useEffect } from 'react';
import styled from 'styled-components'
import {getCollection} from "../../../firebase/query";
import {useDispatch, useSelector} from "react-redux";
import {setCollections} from "../../../redux/blog/slice";
import MainList from "../../.shared/list/MainList";
import BlogItem from "../../.shared/item/BlogItem";
import {RootState} from "../../../redux/store";
import {blogData} from "../../../interfaces/blog.interfaces";



const HomeContainer = () => {
    const dispatch = useDispatch();
    const list = useSelector((state : RootState) => state.blog.list)

    const getBlogs = async () => {
       const result = await getCollection();
        dispatch(setCollections(result))
    }

    useEffect(  () => {
        getBlogs();
    }, []);
    return(
        <Container>
            <MainList data={list}>
                {(data : blogData, index : number) => <BlogItem data={data} index={index}/>}
            </MainList>
        </Container>
    )
};

const Container = styled.div`
    padding-top: 50px;

`;

export default HomeContainer;
