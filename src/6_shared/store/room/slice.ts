import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface RoomState {
  activeRoomName: string | null;
}

const initialRoomState: RoomState = {
  activeRoomName: null,
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
