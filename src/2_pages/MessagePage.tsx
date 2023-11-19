import { useEffect } from 'react';
import Chats from '../3_widgets/chats/Chats';
import { useChatSocketCtx } from '../6_shared/socket/socketContext';

const MessagePage = () => {
  const { socket } = useChatSocketCtx();

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="relative flex w-full h-[100vh] border-r border-light ">
      <Chats />
    </div>
  );
};

export default MessagePage;
