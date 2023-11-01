import { createSlice } from '@reduxjs/toolkit';

export interface InterlocutorDescriptionState {
  isShow: boolean;
}

const initialInterlocutorDescriptionState = {
  isShow: false,
};

export const interlocutorDescriptionSlice = createSlice({
  name: 'interlocutorDescription',
  initialState: initialInterlocutorDescriptionState,
  reducers: {
    showInterlocutorDescription: () => ({ isShow: true }),
    closeInterlocutorDescription: () => ({ isShow: false }),
  },
});

export const { showInterlocutorDescription, closeInterlocutorDescription } =
  interlocutorDescriptionSlice.actions;

export default interlocutorDescriptionSlice.reducer;
