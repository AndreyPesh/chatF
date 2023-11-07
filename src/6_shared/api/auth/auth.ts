import { LoginFormInputs, RegisterFormInputs } from '../interfaces/user';
import { axiosInstance } from '../../axios/axiosInstance';

const LOGIN_URL = 'auth/login';
const REGISTER_URL = 'auth/register';

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
