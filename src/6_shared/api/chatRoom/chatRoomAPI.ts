import { axiosInstance } from '../../axios/axiosInstance';
import { CHAT_ROOM_ROUTES } from './enums/chat-room.route';
import { CreateRoomData } from './types/chat-room.interfaces';

class ChatRoom {
  async createChatRoom(usersData: CreateRoomData) {
    console.log(usersData);
    const response = await axiosInstance.post(
      CHAT_ROOM_ROUTES.CREATE_ROOM,
      usersData
    );
    return response;
  }
}

export default new ChatRoom();
