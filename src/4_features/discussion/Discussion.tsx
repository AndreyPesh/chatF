import { ROLE_DIALOGUE_PARTICIPANTS } from '../../6_shared/enums/roles';
import useQueryConversation from '../../6_shared/hooks/conversation/useQueryConversation';
import useConversationStore from '../../6_shared/hooks/store/useConversationStore';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import { MessageData } from '../../6_shared/interfaces/message';
import InterlocutorMessage from '../messages/InterlocutorMessage';
import SendMessageField from '../messages/SendMessageField';
import UserMessage from '../messages/UserMessage';

const fakeDiscussion: Array<MessageData> = [
  {
    id: 2,
    role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
    userPhotoUrl: '/avatars/Robert.png',
    time: '10:22',
    message: `Got it. And what's your take on incorporating animations? I've seen them on many sites lately.`,
  },
  {
    id: 5,
    role: ROLE_DIALOGUE_PARTICIPANTS.USER,
    userPhotoUrl: '/avatars/Avatar1.png',
    time: '10:32',
    message: `Animations can enhance user engagement, but use them judiciously. Subtle animations for transitions or highlighting elements can make the site feel dynamic without overwhelming users.`,
  },
  {
    id: 23,
    role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
    userPhotoUrl: '/avatars/Robert.png',
    time: '10:36',
    message: `That makes sense. How about mobile responsiveness? It's a must nowadays, right?`,
  },
  {
    id: 56,
    role: ROLE_DIALOGUE_PARTICIPANTS.USER,
    userPhotoUrl: '/avatars/Avatar1.png',
    time: '10:39',
    message: `Absolutely. More users access websites from mobile devices. Design for mobile-first, ensuring that the site looks and functions well on smaller screens.`,
  },
  {
    id: 67,
    role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
    userPhotoUrl: '/avatars/Robert.png',
    time: '10:42',
    message: `Good point. Typography is another aspect I'm curious about. Any font suggestions for a modern look?`,
  },
];

const Discussion = () => {
  const { user } = useUserStore();
  const { conversationList } = useQueryConversation(user.id);
  const { conversation } = useConversationStore();
  console.log(conversationList);
  console.log(conversation.activeId);

  return (
    <div className="w-full p-5 pb-0 bg-light-gray">
      {fakeDiscussion.map(({ id, userPhotoUrl, message, time, role }) => {
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
      })}
      <SendMessageField />
    </div>
  );
};

export default Discussion;
