import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: constants.LANGUAGES.ENGLISH,
  },
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const languageActions = languageSlice.actions;

export default languageSlice;
