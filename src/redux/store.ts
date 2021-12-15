import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice';
import blogSlice from "./blog/slice";

export const store = configureStore({
    reducer: {
        blog : blogSlice,
        auth : authReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
