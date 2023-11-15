import { useQuery } from '@tanstack/react-query';
import ConversationAPI from '../../api/conversation/ConversationAPI';

const CONVERSATION_LIST_KEY = 'list_conversations';

const useQueryConversation = (userId: string) => {
  // const { data: conversationList } = useQuery({
  //   queryKey: [CONVERSATION_LIST_KEY, userId],
  //   queryFn: () => ConversationAPI.getListConversation(userId),
  // });
  // return {
  //   conversationList,
  // };
};

export default useQueryConversation;
