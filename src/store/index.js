import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth-reducer";
import { todosReducer } from "./todos/todos-reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    todo: todosReducer.reducer,
  },
});
