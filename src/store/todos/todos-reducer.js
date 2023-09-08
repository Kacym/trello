import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/helpers";

export const todosReducer = createSlice({
  name: "todos-reducer",
  initialState: initialState.todos,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    removeCard: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    addInnerTask: (state, action) => {
      state.forEach((item) => {
        if(item.id === action.payload.id) {
          return item.task = [...item.task, action.payload.newTodo];
        }
        return item
      });
    },
  },
});

export const { addCard, addInnerTask, removeCard } = todosReducer.actions;
export default todosReducer.reducer;
