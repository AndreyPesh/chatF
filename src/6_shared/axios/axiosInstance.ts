import axios from 'axios';

export const API_URL = 'http://localhost:5000/api';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  withCredentials: true,
});
