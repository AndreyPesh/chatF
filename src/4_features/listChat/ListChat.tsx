import { useState } from 'react';
import PreviewChat from './ui/PreviewChat';

const fakeArrayChat = Array(5).fill('');

const ListChat = () => {
  const [currentChat, setCurrentChat] = useState<number | null>(null);

  // const openChatHandler = (id: number) => {
  //   console.log(id);
  // };

  return (
    <div className="max-w-[370px]">
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
