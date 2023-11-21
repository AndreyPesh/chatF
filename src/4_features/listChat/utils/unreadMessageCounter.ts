import { Message } from '../../../6_shared/socket/types/interface';

export const unreadMessageCounter = (messages: Message[], userId: string) => {
  return messages.reduce((counter, message) => {
    if (!message.isReaded && message.authorId !== userId) {
      return (counter += 1);
    }
    return counter;
  }, 0);
};
