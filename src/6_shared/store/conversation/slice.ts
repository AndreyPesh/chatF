import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ConversationUserData } from '../../api/conversation/interfaces/interface';

export interface ConversationState {
  activeId: string | null;
  participantData: ConversationUserData | null;
}

const initialConversationState: ConversationState = {
  activeId: null,
  participantData: null,
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
