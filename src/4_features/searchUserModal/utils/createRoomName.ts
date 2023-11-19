import { CreateRoomData } from '../../../6_shared/api/chatRoom/types/chat-room.interfaces';

export const createRoomName = (interlocutors: CreateRoomData) => {
  return `${interlocutors.participantId}_${interlocutors.userId}`;
};
