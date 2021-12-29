import {createSlice} from "@reduxjs/toolkit";
import {IBlogData} from "../../interfaces/blog.interfaces";

export interface blogState {
    list: IBlogData[]
    detail : IBlogData
    uploadingImage : boolean
}

const initialState: blogState = {
    list: [],
    detail : {},
    uploadingImage : false
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
        },
        checkLoading : (state) => {
            state.uploadingImage = !state.uploadingImage
        }
    },
})

export const { setCollections, setDocument, checkLoading } = blogSlice.actions

export default blogSlice.reducer

