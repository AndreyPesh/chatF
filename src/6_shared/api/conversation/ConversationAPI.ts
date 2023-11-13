import { axiosInstance } from '../../axios/axiosInstance';
import { CONVERSATION_ROUTE } from './enums/routes';
import { ConversationData, InterlocutorsData } from './interfaces/interface';

class ConversationAPI {
  async createConversation(interlocutors: InterlocutorsData) {
    const response = await axiosInstance.post(
      CONVERSATION_ROUTE.CREATE_CONVERSATION,
      interlocutors
    );
    return response;
  }

  async getListConversation(userId: string) {
    if (!userId) return [];
    const response = await axiosInstance.get<ConversationData[]>(
      CONVERSATION_ROUTE.LIST_CONVERSATION + `/${userId}`
    );
    return response.data;
  }
}

export default new ConversationAPI();
