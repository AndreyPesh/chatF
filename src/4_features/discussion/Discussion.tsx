import { ROLE_DIALOGUE_PARTICIPANTS } from '../../6_shared/enums/roles';

const fakeDiscussion = [
  {
    role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
    userPhotoUrl: '/avatars/Robert.png',
    time: '10:22',
    message: `Got it. And what's your take on incorporating animations? I've seen them on many sites lately.`
  },
  {
    role: ROLE_DIALOGUE_PARTICIPANTS.USER,
    userPhotoUrl: '/avatars/Avatar1.png',
    time: '10:32',
    message: `Animations can enhance user engagement, but use them judiciously. Subtle animations for transitions or highlighting elements can make the site feel dynamic without overwhelming users.`
  },
  {
    role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
    userPhotoUrl: '/avatars/Robert.png',
    time: '10:36',
    message: `That makes sense. How about mobile responsiveness? It's a must nowadays, right?`
  },
  {
    role: ROLE_DIALOGUE_PARTICIPANTS.USER,
    userPhotoUrl: '/avatars/Avatar1.png',
    time: '10:39',
    message: `Absolutely. More users access websites from mobile devices. Design for mobile-first, ensuring that the site looks and functions well on smaller screens.`
  },
  {
    role: ROLE_DIALOGUE_PARTICIPANTS.INTERLOCUTOR,
    userPhotoUrl: '/avatars/Robert.png',
    time: '10:42',
    message: `Good point. Typography is another aspect I'm curious about. Any font suggestions for a modern look?`
  },
];

const Discussion = () => {
  return <div></div>;
};

export default Discussion;
