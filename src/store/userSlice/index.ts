
/**
 * 是否为医师
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from '../index'

interface userType {
    isDoctor: boolean | null | undefined,
}

const initialState: userType = {
    isDoctor: null,

}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserstatus: (state, action: PayloadAction<boolean>) => {
            state.isDoctor = action.payload
        },
    }
})
export const { setUserstatus } = userSlice.actions
export const selectCount = (state: RootState) => state.user.isDoctor

export default userSlice.reducer

