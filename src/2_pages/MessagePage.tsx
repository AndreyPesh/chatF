import Chats from '../3_widgets/chats/Chats';
import Conversation from '../3_widgets/conversation/Conversation';

const MessagePage = () => {
  return (
    <div className="py-[20px] px-[24px] flex">
      <Chats />
      <Conversation />
    </div>
  );
};

export default MessagePage;
