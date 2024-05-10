import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Auth {
  username: string;
  password: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: true,
  reducers: {
    login: (_, action: PayloadAction<Auth>) => {
      const { username, password } = action.payload;
      if (username === "admin" && password === "admin") return true;
    },
    logout: (state) => {
      if (state === true) return false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
