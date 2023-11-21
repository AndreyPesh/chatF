import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import interlocutorDescription from '../../3_widgets/interlocutor/state/slice';
import user from '../../6_shared/store/user/slice';
import room from '../../6_shared/store/room/slice';
import roomList from '../../6_shared/store/roomList/slice';

export const store = configureStore({
  reducer: {
    user,
    interlocutorDescription,
    roomList,
    room,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
