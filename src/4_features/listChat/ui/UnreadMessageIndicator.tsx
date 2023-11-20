import { useEffect } from 'react';
import { useChatSocketCtx } from '../../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../../6_shared/socket/types/events.enum';

const UnreadMessageIndicator = ({
  value,
}: {
  value: number;
  roomId: string;
}) => {
  const { socket } = useChatSocketCtx();

  useEffect(() => {
    const readMessageHandler = () => {};
    socket.on(CHAT_EVENTS.READ_MESSAGE, readMessageHandler);
    return () => {
      socket.off(CHAT_EVENTS.READ_MESSAGE, readMessageHandler);
    };
  }, []);

  return (
    <div className="w-6 h-6 inline-flex items-center justify-center bg-red text-white rounded-full">
      {value}
    </div>
  );
};

export default UnreadMessageIndicator;
