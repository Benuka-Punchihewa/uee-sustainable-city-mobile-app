import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const login = async (data) => {
  const axiosInstance = await getApi();
  const response = await axiosInstance
    .post("/auth/login", data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
