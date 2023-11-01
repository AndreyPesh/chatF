import Chats from '../3_widgets/chats/Chats';
import Conversation from '../3_widgets/conversation/Conversation';
import InterlocutorDescription from '../3_widgets/interlocutor/InterlocutorDescription';

const MessagePage = () => {
  return (
    <div className="relative py-[20px] px-[24px] flex w-full border-r border-light overflow-hidden">
      <Chats />
      <Conversation />
      <InterlocutorDescription />
    </div>
  );
};

export default MessagePage;
