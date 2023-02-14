import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;

const backendInstance = axios.create({ baseURL: baseURL });

backendInstance.interceptors.request.use(
  (config) => {
    console.log("making axios request", config);
    return config;
  },
  (error) => {
    console.error("axios request error", error);
    return Promise.reject(error);
  }
);

backendInstance.interceptors.response.use(
  (response) => {
    console.log("receiving axios response", response);
    return response;
  },
  (error) => {
    console.error("axios response error", error);
    return Promise.reject(error);
  }
);

export default backendInstance;
