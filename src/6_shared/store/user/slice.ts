import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserData } from '../../api/auth/interfaces/user';

export interface UserState extends UserData {}

const initialUserState: UserState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => ({
      ...state,
      ...action.payload,
    }),
    removeUser: () => initialUserState,
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
