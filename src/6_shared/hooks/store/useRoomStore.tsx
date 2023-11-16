import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import { RoomState, setActiveRoom } from '../../store/room/slice';

const useRoomStore = () => {
  const room = useAppSelector((state) => state.room);
  const dispatch = useAppDispatch();
  return {
    room,
    setActiveRoom: (activeRoomData: RoomState) =>
      dispatch(setActiveRoom(activeRoomData)),
  };
};

export default useRoomStore;
