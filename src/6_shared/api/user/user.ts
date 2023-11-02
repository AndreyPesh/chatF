import { LoginFormInputs } from '../interfaces/user';
import { axiosInstance } from '../../axios/axiosInstance';

const LOGIN_URL = '/login';

export const loginUserFetch = async (loginUserData: LoginFormInputs) => {
  const response = await axiosInstance.post(LOGIN_URL, loginUserData);
  return response;
};
