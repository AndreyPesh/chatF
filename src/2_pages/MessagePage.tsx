import { useEffect } from 'react';
import Chats from '../3_widgets/chats/Chats';
import { useChatSocketCtx } from '../6_shared/socket/socketContext';
import useRoomStore from '../6_shared/hooks/store/useActiveRoomStore';

const MessagePage = () => {
  const { socket } = useChatSocketCtx();
  const { resetRoom } = useRoomStore();

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
      resetRoom();
    };
  }, []);

  return (
    <div className="relative flex w-full h-[100vh] border-r border-light ">
      <Chats />
    </div>
  );
};

export default MessagePage;
