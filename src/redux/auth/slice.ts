import {createSlice} from "@reduxjs/toolkit";

export interface authState {
    user : object | null
    authInitialized : boolean
}

const initialState: authState = {
    user : null,
    authInitialized : false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo: (state, {payload}) => {
            state.user = payload;
        },
        checkedAuth : (state) => {
            state.authInitialized = !state.authInitialized
        }
    },
})

export const { setUserInfo ,checkedAuth} = authSlice.actions

export default authSlice.reducer
