export interface Message {
  id: string;
  content: string;
  authorId: string;
  roomId: string;
  isReaded: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInRoom {
  id: string;
  fullName: string;
  isParticipant: boolean;
}

export interface Room {
  id: string;
  roomName: string;
  numberOfUnreadMessage: number;
  users: UserInRoom[];
  messages: Message[];
}
