import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    userId: null,
    userName: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.userId = null;
      state.userName = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
