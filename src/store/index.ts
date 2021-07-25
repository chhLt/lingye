import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './countSlice'
import userReducer from './userSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
