import axios, { AxiosInstance } from "axios";

const api = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: "/api",
  });

  return instance;
};

export default api;
