import { createSlice } from '@reduxjs/toolkit'
import { incrementByAmount } from "./counterSlice";

interface initType{
    list:Array<any>,
    length:number
}
let initState:initType = {
    list:[],
    length:0
}
export const moveSlice = createSlice({
    name: "move",
    initialState:initState,
    reducers: {
        loadDataEnd(state, { payload }) {
            state.list = payload;
            state.length = state.list.length;
        }
    },
    // 触发其他额外的slice 关联的数据
    extraReducers: (builder) => {
        builder.addCase(incrementByAmount,(state, action) => {
            state.list.push(action.payload)
            state.length += 1
          console.log(state.list,state.length);
          
        })
    }
    //  {
        
    //     [increment](state: { list: any[]; length: number; }, payload: any) {
    //         // console.log(payload);
    //         state.list.push(payload);
    //         state.length += 1
    //     }
    // }
})
export const { loadDataEnd} = moveSlice.actions;
export default moveSlice
