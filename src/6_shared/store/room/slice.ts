import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Room } from '../../socket/types/interface';

export interface RoomState extends Room {}

const initialRoomState: Room = {
  id: '',
  roomName: '',
  messages: [],
  users: [{ id: '', fullName: '', numberOfUnreadMessage: 0 }],
};

export const roomSlice = createSlice({
  name: 'activeRoom',
  initialState: initialRoomState,
  reducers: {
    setActiveRoom: (state, action: PayloadAction<RoomState>) => ({
      ...state,
      ...action.payload,
    }),
    updateActiveRoomMessageList: (state, action: PayloadAction<Room>) => {
      if (state.id === action.payload.id) {
        state.messages = [...action.payload.messages];
        state.users = action.payload.users;
      }
      return state;
    },
    resetRoom: () => initialRoomState,
  },
});

export const { setActiveRoom, updateActiveRoomMessageList, resetRoom } =
  roomSlice.actions;

export default roomSlice.reducer;
