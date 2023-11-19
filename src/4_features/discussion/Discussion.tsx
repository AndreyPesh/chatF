// import { ROLE_DIALOGUE_PARTICIPANTS } from '../../6_shared/enums/roles';
import { useEffect, useState } from 'react';
import useRoomStore from '../../6_shared/hooks/store/useRoomStore';
// import { socket } from '../../6_shared/socket/socket';
// import useQueryConversation from '../../6_shared/hooks/conversation/useQueryConversation';
// import useConversationStore from '../../6_shared/hooks/store/useConversationStore';
// import useUserStore from '../../6_shared/hooks/store/useUserStore';
// import { MessageData } from '../../6_shared/interfaces/message';
// import InterlocutorMessage from '../messages/InterlocutorMessage';
import SendMessageField from '../messages/SendMessageField';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';
// import UserMessage from '../messages/UserMessage';

// const fakeDiscussion: Array<MessageData> = [
//   {
//     id: 2,
//     role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
//     userPhotoUrl: '/avatars/Robert.png',
//     time: '10:22',
//     message: `Got it. And what's your take on incorporating animations? I've seen them on many sites lately.`,
//   },
//   {
//     id: 5,
//     role: ROLE_DIALOGUE_PARTICIPANTS.USER,
//     userPhotoUrl: '/avatars/Avatar1.png',
//     time: '10:32',
//     message: `Animations can enhance user engagement, but use them judiciously. Subtle animations for transitions or highlighting elements can make the site feel dynamic without overwhelming users.`,
//   },
//   {
//     id: 23,
//     role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
//     userPhotoUrl: '/avatars/Robert.png',
//     time: '10:36',
//     message: `That makes sense. How about mobile responsiveness? It's a must nowadays, right?`,
//   },
//   {
//     id: 56,
//     role: ROLE_DIALOGUE_PARTICIPANTS.USER,
//     userPhotoUrl: '/avatars/Avatar1.png',
//     time: '10:39',
//     message: `Absolutely. More users access websites from mobile devices. Design for mobile-first, ensuring that the site looks and functions well on smaller screens.`,
//   },
//   {
//     id: 67,
//     role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
//     userPhotoUrl: '/avatars/Robert.png',
//     time: '10:42',
//     message: `Good point. Typography is another aspect I'm curious about. Any font suggestions for a modern look?`,
//   },
// ];

const Discussion = () => {
  const { socket } = useChatSocketCtx();
  // const { user } = useUserStore();
  // const { conversationList } = useQueryConversation(user.id);
  // const { conversation } = useConversationStore();
  // console.log(conversationList);
  // console.log(conversation.activeId);
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
      socket.on('chat', chat);
    };

    socket.on('connect', listeningChatEvent);

    return () => {
      socket.off('connect', listeningChatEvent);
      socket.off('chat', chat);
      socket.removeListener('chat', chat);
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
