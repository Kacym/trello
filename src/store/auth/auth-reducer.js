import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/helpers";

export const authReducer = createSlice({
    name: 'auth-reducer',
    initialState: initialState,
    reducers: {
        login: (state) => {
            state.isLogged = true
        }
    }
})

export const { login } = authReducer.actions;
export default authReducer.reducer;