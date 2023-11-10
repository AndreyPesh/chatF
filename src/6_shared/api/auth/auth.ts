import { LoginFormInputs, RegisterFormInputs } from './interfaces/user';
import { axiosInstance } from '../../axios/axiosInstance';

const LOGIN_URL = 'auth/login';
const REGISTER_URL = 'auth/register';
const REFRESH_URL = 'auth/refresh';
const LOGOUT_URL = 'auth/logout';

export const loginUserFetch = async (loginUserData: LoginFormInputs) => {
  const response = await axiosInstance.post(LOGIN_URL, loginUserData);
  return response;
};

export const registerUserFetch = async (
  registerUserData: RegisterFormInputs
) => {
  const response = await axiosInstance.post(REGISTER_URL, registerUserData);
  return response;
};

export const refreshToken = async () => {
  const response = await axiosInstance.post(REFRESH_URL);
  return response;
};

export const logoutUserFetch = async () => {
  const response = await axiosInstance.get(LOGOUT_URL);
  return response;
};
