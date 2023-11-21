import { useEffect, useState } from 'react';
import { useChatSocketCtx } from '../../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../../6_shared/socket/types/events.enum';
import classNames from 'classnames';

const UnreadMessageIndicator = ({
  value,
}: {
  value: number;
  roomId: string;
}) => {
  const { socket } = useChatSocketCtx();
  const [counterMessages, setCounterMessages] = useState(value);

  useEffect(() => {
    const readMessageHandler = () => {
      console.log('message readed');
      // setCounterMessages(0);
    };
    socket.on(CHAT_EVENTS.READ_MESSAGE, readMessageHandler);
    return () => {
      socket.off(CHAT_EVENTS.READ_MESSAGE, readMessageHandler);
    };
  }, []);

  return (
    <div
      className={classNames(
        'w-6 h-6 inline-flex items-center justify-center bg-red text-white rounded-full',
        // { 'hidden': counterMessages === 0}
      )}
    >
      {value}
    </div>
  );
};

export default UnreadMessageIndicator;
