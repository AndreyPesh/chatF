import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Room } from '../../socket/types/interface';

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
  },
});

export const { setActiveRoom } = roomSlice.actions;

export default roomSlice.reducer;
