import { ApiResponseCodeEnum } from "@/types/api";
import axios from "axios"
const api = axios.create({
  baseURL: "/api"
});

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  //default config
  return config;
}, function (error) {
  // Do something with request error

  return Promise.resolve(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return { ...response, apiResponseCode: ApiResponseCodeEnum.API_GOOD };
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const errorResponse = error
  if (!error.request) { }
  return Promise.resolve({ ...errorResponse, apiResponseCode: ApiResponseCodeEnum.API_BAD });
});

export { api }

