export interface InterlocutorsData {
  userId: string;
  participantId: string;
}

interface Messages {
  id: string;
  content: string;
  authorId: string;
  conversationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ConversationUserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ConversationData {
  id: string;
  messages: Messages[];
  users: ConversationUserData[];
}
