export interface Message {
  id: string;
  content: string;
  authorId: string;
  roomId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInRoom {
  id: string;
  fullName: string;
}

export interface Room {
  id: string;
  roomName: string;
  users: UserInRoom[];
  messages: Message[];
}
