import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ConversationState {
  activeId: string | null;
  participantId: string | null;
}

const initialConversationState: ConversationState = {
  activeId: null,
  participantId: null,
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState: initialConversationState,
  reducers: {
    setActiveConversation: (
      state,
      action: PayloadAction<ConversationState>
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setActiveConversation } = conversationSlice.actions;

export default conversationSlice.reducer;
