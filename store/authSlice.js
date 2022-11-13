import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    userId: null,
    userRole: null,
    userName: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.userRole = action.payload.userRole;
      state.userName = action.payload.userName;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.userId = null;
      state.userRole = null;
      state.userName = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
