import {createSlice} from "@reduxjs/toolkit";

export interface authState {
    user : object | null
}

const initialState: authState = {
    user : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo: (state, {payload}) => {
            state.user = payload;
        }
    },
})

export const { setUserInfo } = authSlice.actions

export default authSlice.reducer
