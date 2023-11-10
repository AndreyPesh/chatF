import { axiosInstance } from '../../axios/axiosInstance';
import { STATUS_CODE } from '../enums/status';
import { Participant } from './interfaces/user';

const enum USER_API_URL {
  GET_ALL_USER = 'user/all',
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
    } catch {
      console.error('cant gel list users!');
    }
  }
}

export default new userAPI();
