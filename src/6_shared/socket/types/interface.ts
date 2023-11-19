export interface Message {
  id: string;
  content: string;
  authorId: string;
  roomId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Room {
  id: string;
  roomName: string;
  users: [{ id: string; fullName: string }];
  messages: Message[];
}
