import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/helpers";

export const authReducer = createSlice({
    name: 'auth-reducer',
    initialState: initialState.isLogged,
    reducers: {
        
    }
})