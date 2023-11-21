import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Room } from '../../socket/types/interface';

const initialRoomListState: Room[] = [];

export const roomListSlice = createSlice({
  name: 'roomList',
  initialState: initialRoomListState,
  reducers: {
    setRooms: (_, action: PayloadAction<Room[]>) => [...action.payload],
    // addMessage: (state, action: PayloadAction<Message>) => {
    //   if (state.id === action.payload.roomId) {
    //     return {
    //       ...state,
    //       messages: [...state.messages, action.payload],
    //     };
    //   }
    // },
  },
});

export const { setRooms } = roomListSlice.actions;

export default roomListSlice.reducer;
