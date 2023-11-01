import { configureStore } from '@reduxjs/toolkit';
import interlocutorDescription from '../../3_widgets/interlocutor/state/slice';

export const store = configureStore({
  reducer: {
    interlocutorDescription,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
