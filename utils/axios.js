import axios from "axios";
import constants from "../constants";
import store from "../store";

// creates an axios instance
export const getApi = async () => {
  // JWT Token
  const authState = store.getState()?.auth;

  return axios.create({
    baseURL: constants.API_BASE_URL,
    headers: {
      Authorization: authState.token ? "Bearer " + authState.token : null,
      "Content-Type": "application/json",
    },
  });
};
