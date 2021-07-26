import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from 'store'
interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}
// createAsyncThunk 异步的，有三个状态 pedding fulfilled rejected  进行钟 成功 失败


export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAnyc = (payload: number) => (dispatch: (arg0: { payload: number; type: string; }) => void) => {
    setTimeout(() => {
        dispatch(incrementByAmount(payload))
    }, 1000)
}
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice
