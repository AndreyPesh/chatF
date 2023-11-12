import { axiosInstance } from '../../axios/axiosInstance';
import { UserState } from '../../store/user/slice';
import { STATUS_CODE } from '../enums/status';
import { Participant } from './interfaces/user';

const enum USER_API_URL {
  GET_ALL_USER = 'user/all',
  GET_CURRENT_USER = 'user/current',
}

class userAPI {
  async getListParticipants() {
    try {
      const response = await axiosInstance.get<Participant[]>(
        USER_API_URL.GET_ALL_USER
      );
      if (response.status === STATUS_CODE.OK) {
        return response.data;
      }
      return [];
    } catch {
      console.error('cant gel list users!');
    }
  }

  async getCurrentUserData() {
    try {
      const response = await axiosInstance.get<UserState>(
        USER_API_URL.GET_CURRENT_USER
      );
      // console.log(response.data);
      return response.data;
    } catch {
      console.error('Cant get current user!');
    }
  }
}

export default new userAPI();
