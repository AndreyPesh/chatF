import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Message, Room } from '../../socket/types/interface';

export interface RoomState extends Room {
  activeRoomName: string | null;
}

const initialRoomState: RoomState = {
  activeRoomName: null,
  id: '',
  roomName: '',
  messages: [],
  users: [{ id: '', fullName: '' }],
};

export const roomSlice = createSlice({
  name: 'room',
  initialState: initialRoomState,
  reducers: {
    setActiveRoom: (state, action: PayloadAction<RoomState>) => ({
      ...state,
      ...action.payload,
    }),
    addMessage: (state, action: PayloadAction<Message>) => ({
      ...state,
      messages: [...state.messages, action.payload],
    }),
  },
});

export const { setActiveRoom, addMessage } = roomSlice.actions;

export default roomSlice.reducer;
