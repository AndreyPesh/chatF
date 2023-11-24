import { UserInRoom } from '../socket/types/interface';

export const getRoomUsers = (users: UserInRoom[], currentUserId: string) => {
  const currentUser = users.find((userData) => userData.id === currentUserId);
  const participant = users.find((userData) => userData.id !== currentUserId);
  return { currentUser, participant };
};
