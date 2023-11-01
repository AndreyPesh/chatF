import { useState } from 'react';
import PreviewChat from './ui/PreviewChat';

const fakeArrayChat = Array(8).fill('');

const ListChat = () => {
  const [currentChat, setCurrentChat] = useState<number | null>(null);

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
