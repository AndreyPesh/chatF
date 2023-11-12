import { useState } from 'react';
import PreviewChat from './ui/PreviewChat';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import useQueryConversation from '../../6_shared/hooks/conversation/useQueryConversation';

const fakeArrayChat = Array(8).fill('');

const ListChat = () => {
  const { user } = useUserStore();
  const { conversationList } = useQueryConversation(user.id);
  const [currentChat, setCurrentChat] = useState<number | null>(null);

  console.log(conversationList);

  return (
    <div className="max-w-[390px] pb-[260px] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      {fakeArrayChat.map((_, index) => (
        <PreviewChat
          key={index}
          id={index}
          isActive={currentChat === index}
          openChatHandler={setCurrentChat}
        />
      ))}
    </div>
  );
};

export default ListChat;
