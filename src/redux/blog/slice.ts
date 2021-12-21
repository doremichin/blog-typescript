import {createSlice} from "@reduxjs/toolkit";
import {IBlogData} from "../../interfaces/blog.interfaces";

export interface blogState {
    list: IBlogData[];
    detail : IBlogData | object
}

const initialState: blogState = {
    list: [],
    detail : {}
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setCollections: (state, {payload}) => {
            state.list = payload;
        },
        setDocument : (state, {payload}) => {
            state.detail = payload
        }
    },
})

export const { setCollections, setDocument } = blogSlice.actions

export default blogSlice.reducer

