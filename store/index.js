import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import languageSlice from "./languageSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
  auth: authSlice.reducer,
  language: languageSlice.reducer,
});

// configurations
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// create redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
