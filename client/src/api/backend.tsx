import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;

const backendInstance = axios.create({ baseURL: baseURL });

export default backendInstance;
