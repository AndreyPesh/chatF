import Chats from '../3_widgets/chats/Chats';
import Conversation from '../3_widgets/conversation/Conversation';
import InterlocutorDescription from '../3_widgets/interlocutor/InterlocutorDescription';

const MessagePage = () => {
  return (
    <div className="py-[20px] px-[24px] flex">
      <Chats />
      <Conversation />
      <InterlocutorDescription />
    </div>
  );
};

export default MessagePage;
