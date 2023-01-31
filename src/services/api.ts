import axios from "axios";
import { getUserSessionStorage } from "../context/AuthProvider/util";

export const Api = axios.create({
  baseURL: "http://localhost:3001/",
});

Api.interceptors.request.use(
  async (config) => {
    const user = getUserSessionStorage();
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
