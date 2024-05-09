import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users";
import authReducer from "./slices/auth";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
