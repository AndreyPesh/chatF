import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import {
  ConversationState,
  setActiveConversation,
} from '../../store/conversation/slice';

const useConversationStore = () => {
  const conversation = useAppSelector((state) => state.conversation);
  const dispatch = useAppDispatch();
  return {
    conversation,
    setActiveConversation: (activeConversationData: ConversationState) =>
      dispatch(setActiveConversation(activeConversationData)),
  };
};

export default useConversationStore;
