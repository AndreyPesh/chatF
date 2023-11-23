import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Room } from '../../socket/types/interface';

const initialRoomListState: Room[] = [];

export const roomListSlice = createSlice({
  name: 'roomList',
  initialState: initialRoomListState,
  reducers: {
    setRooms: (_, action: PayloadAction<Room[]>) => [...action.payload],
    updateRoomById: (state, action: PayloadAction<Room>) => {
      state.map((room, index) => {
        if (room.id === action.payload.id) {
          state[index].messages = action.payload.messages;
          state[index].users = action.payload.users;
          // state[index].numberOfUnreadMessage =
          //   action.payload.numberOfUnreadMessage;
        }
      });
      return state;
    },
  },
});

export const { setRooms, updateRoomById } = roomListSlice.actions;

export default roomListSlice.reducer;
