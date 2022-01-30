import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components'
import {getCollectionByUidFB, getCollectionFB} from "../../../firebase/query";
import {useDispatch, useSelector} from "react-redux";
import {setCollections} from "../../../redux/blog/slice";
import MainList from "../../.shared/list/MainList";
import BlogItem from "../../.shared/item/BlogItem";
import {RootState} from "../../../redux/store";
import { IBlogData} from "../../../interfaces/blog.interfaces";
import MyPostToggle, {MyPostToggleProps} from "../../.shared/filter/MyPostToggle";
import { ContentContainer } from '../../.shared/layout/Layout.Styled';



const HomeContainer = () => {
    const dispatch = useDispatch();
    const { list, uid } = useSelector((state : RootState) => ({
        list : state.blog.list,
        uid : state?.auth?.user?.uid
    }))

    const getBlogByUid = async () => {
        if(!uid) return;
        const result = await getCollectionByUidFB('blog',uid)
        dispatch(setCollections(result))
    }
    const getBlogs = useCallback (async () => {
        const result = await getCollectionFB('blog');
        dispatch(setCollections(result))
    },[dispatch]);

    const onChange : MyPostToggleProps['onChange']= (value) => {
        if(value) getBlogByUid();
        else getBlogs();
    }

    useEffect(() => {
        getBlogs();
    }, [getBlogs]);


    return(
        <Container>
            <ContentContainer>
                <Filter>
                    <MyPostToggle onChange={onChange} hasUid={!uid}/>
                </Filter>
                <MainList data={list}>
                    {(data : IBlogData, index : number) => <BlogItem data={data} index={index}/>}
                </MainList>
            </ContentContainer>
        </Container>
    )
};

const Container = styled.div`
    padding-top: 50px;
`;
const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export default HomeContainer;
