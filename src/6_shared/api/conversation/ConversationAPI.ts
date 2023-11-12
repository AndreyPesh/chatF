import { axiosInstance } from '../../axios/axiosInstance';
import { CONVERSATION_ROUTE } from './enums/routes';
import { InterlocutorData } from './interfaces/interface';

class ConversationAPI {
  async createConversation(interlocutors: InterlocutorData) {
    const response = await axiosInstance.post(
      CONVERSATION_ROUTE.CREATE_CONVERSATION,
      interlocutors
    );
    console.log(response.data);
  }
}

export default new ConversationAPI();
