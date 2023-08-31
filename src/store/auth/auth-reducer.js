import { createSlice } from "@reduxjs/toolkit";
// import { initialState } from "../../constants/helpers";

export const initialState = {
    isLogged: false,
    todos: []
}

export const authReducer = createSlice({
    name: 'auth-reducer',
    initialState: initialState,
    reducers: {
        login: (state) => {
            state.isLogged = true
        },
        logout: (state) => {
            state.isLogged = false
        }
    }
})

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;