import { useQuery } from '@tanstack/react-query';
import ConversationAPI from '../../api/conversation/ConversationAPI';

const CONVERSATION_LIST_KEY = 'list_conversations';

const useQueryConversation = (id: string) => {
  const { data: conversationList } = useQuery({
    queryKey: [CONVERSATION_LIST_KEY, id],
    queryFn: () => ConversationAPI.getListConversation(id),
  });
  return {
    conversationList,
  };
};

export default useQueryConversation;
