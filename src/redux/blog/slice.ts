import {createSlice} from "@reduxjs/toolkit";
import {blogData} from "../../interfaces/blog.interfaces";

export interface blogState {
    list: blogData[]
}

const initialState: blogState = {
    list: [],
}

const blogSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCollections: (state, {payload}) => {
            state.list = payload;
        },
    },
})

export const { setCollections } = blogSlice.actions

export default blogSlice.reducer
