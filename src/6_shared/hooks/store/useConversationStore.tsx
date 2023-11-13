import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import { setActiveConversation } from '../../store/conversation/slice';

const useConversationStore = () => {
  const conversation = useAppSelector((state) => state.conversation);
  const dispatch = useAppDispatch();
  return {
    conversation,
    setActiveConversation: (id: { id: string | null }) =>
      dispatch(setActiveConversation(id)),
  };
};

export default useConversationStore;
