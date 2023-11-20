import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import { Message } from '../../socket/types/interface';
import {
  RoomState,
  setActiveRoom,
  addMessage,
  resetRoom,
} from '../../store/room/slice';

const useRoomStore = () => {
  const room = useAppSelector((state) => state.room);
  const dispatch = useAppDispatch();
  return {
    room,
    setActiveRoom: (activeRoomData: RoomState) =>
      dispatch(setActiveRoom(activeRoomData)),
    addNewMessage: (message: Message) => {
      dispatch(addMessage(message));
    },
    resetRoom: () => {
      dispatch(resetRoom());
    },
  };
};

export default useRoomStore;
