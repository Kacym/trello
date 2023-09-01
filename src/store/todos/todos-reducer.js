import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/helpers";

export const todosReducer = createSlice({
  name: "todos-reducer",
  initialState: initialState.todos,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCard } = todosReducer.actions;
export default todosReducer.reducer;
