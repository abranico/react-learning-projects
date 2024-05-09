import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: true,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === "admin" && password === "admin") return true;
    },
    logout: (state, action) => {
      if (state === true) return false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
