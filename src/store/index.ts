import { configureStore } from '@reduxjs/toolkit'
import counterReducer   from './module/counterSlice' 
import moveSlice from './module/moveSlice' 

export const store = configureStore({
    reducer: {
      counter:counterReducer.reducer,
      move:moveSlice.reducer
    },
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch