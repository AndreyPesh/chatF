import { useEffect } from 'react';
import useActiveRoomStore from '../../6_shared/hooks/store/useActiveRoomStore';
import InterlocutorMessage from '../messages/InterlocutorMessage';
import SendMessageField from '../messages/SendMessageField';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../6_shared/socket/types/events.enum';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import UserMessage from '../messages/UserMessage';
import { Message } from '../../6_shared/socket/types/interface';

const Discussion = () => {
  const { socket } = useChatSocketCtx();
  const { user } = useUserStore();
  const { activeRoom } = useActiveRoomStore();

  useEffect(() => {
    const chat = (
      message: Message,
      { roomId, roomName }: { roomId: string; roomName: string }
    ) => {
      if (message) {
        socket.emit(CHAT_EVENTS.UPDATE_ROOM_EMIT, { roomId, roomName });
      }
    };

    const listeningChatEvent = () => {
      socket.on(CHAT_EVENTS.CHAT, chat);
    };

    socket.on(CHAT_EVENTS.CONNECT, listeningChatEvent);

    return () => {
      socket.off(CHAT_EVENTS.CONNECT, listeningChatEvent);
      socket.off(CHAT_EVENTS.CHAT, chat);
      socket.removeListener(CHAT_EVENTS.CHAT, chat);
    };
  }, []);

  return (
    <div className="flex flex-col w-full min-h-full p-5 pb-0 bg-light-gray">
      <div className='grow'>
        {activeRoom.id &&
          activeRoom.messages.map(
            ({ id, content, authorId, createdAt, isReaded }) => {
              return authorId === user.id ? (
                <UserMessage
                  key={id}
                  userPhotoUrl={'/avatars/Avatar1.png'}
                  message={content}
                  time={createdAt}
                  status={isReaded}
                />
              ) : (
                <InterlocutorMessage
                  key={id}
                  userPhotoUrl={'/avatars/Robert.png'}
                  message={content}
                  time={createdAt}
                />
              );
            }
          )}
      </div>
      {activeRoom.id && <SendMessageField />}
    </div>
  );
};

export default Discussion;
