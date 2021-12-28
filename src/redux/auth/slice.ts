import {createSlice} from "@reduxjs/toolkit";
import {IUserData} from "../../interfaces/user.interfaces";

export interface authState {
    user :  IUserData | null
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
