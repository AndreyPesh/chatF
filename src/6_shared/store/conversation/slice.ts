import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ConversationState {
  activeId: string | null;
}

const initialConversationState: ConversationState = {
  activeId: null,
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState: initialConversationState,
  reducers: {
    setActiveConversation: (
      state,
      action: PayloadAction<{ id: string | null }>
    ) => ({
      ...state,
      activeId: action.payload.id,
    }),
  },
});

export const { setActiveConversation } = conversationSlice.actions;

export default conversationSlice.reducer;
