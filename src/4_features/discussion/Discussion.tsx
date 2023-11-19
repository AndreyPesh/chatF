// import { ROLE_DIALOGUE_PARTICIPANTS } from '../../6_shared/enums/roles';
import { useEffect, useState } from 'react';
import useRoomStore from '../../6_shared/hooks/store/useRoomStore';
// import useUserStore from '../../6_shared/hooks/store/useUserStore';
// import { MessageData } from '../../6_shared/interfaces/message';
// import InterlocutorMessage from '../messages/InterlocutorMessage';
import SendMessageField from '../messages/SendMessageField';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../6_shared/socket/types/events.enum';

const Discussion = () => {
  const { socket } = useChatSocketCtx();
  // const { user } = useUserStore();
  const { room } = useRoomStore();
  const [messages, setMessages] = useState<Array<{ message: string }>>([
    { message: '' },
  ]);

  useEffect(() => {
    const chat = (response: unknown) => {
      if (response) {
        //@ts-ignore
        setMessages((prev) => [...prev, { message: response.message }]);
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
    <div className="w-full min-h-full p-5 pb-0 bg-light-gray">
      <h1>Name room: {room.activeRoomName}</h1>
      {/* {fakeDiscussion.map(({ id, userPhotoUrl, message, time, role }) => {
        return role === ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR ? (
          <InterlocutorMessage
            key={id}
            userPhotoUrl={userPhotoUrl}
            message={message}
            time={time}
          />
        ) : (
          <UserMessage
            key={id}
            userPhotoUrl={userPhotoUrl}
            message={message}
            time={time}
          />
        );
      })} */}

      {messages &&
        messages.map(({ message }, index) => <p key={index}>{message}</p>)}
      {room.activeRoomName && <SendMessageField />}
    </div>
  );
};

export default Discussion;
