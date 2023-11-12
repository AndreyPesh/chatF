import { axiosInstance } from '../../axios/axiosInstance';
import { CONVERSATION_ROUTE } from './enums/routes';
import { InterlocutorsData } from './interfaces/interface';

class ConversationAPI {
  async createConversation(interlocutors: InterlocutorsData) {
    const response = await axiosInstance.post(
      CONVERSATION_ROUTE.CREATE_CONVERSATION,
      interlocutors
    );
    return response;
  }
}

export default new ConversationAPI();
