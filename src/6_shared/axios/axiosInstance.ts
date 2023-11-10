import axios from 'axios';
import { refreshToken } from '../api/auth/auth';

export const API_URL = 'http://localhost:5000/api';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      await refreshToken();
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
