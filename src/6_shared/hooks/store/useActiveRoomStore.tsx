import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import { RoomState, setActiveRoom, resetRoom } from '../../store/room/slice';

const useActiveRoomStore = () => {
  const activeRoom = useAppSelector((state) => state.activeRoom);
  const dispatch = useAppDispatch();
  return {
    activeRoom,
    setActiveRoom: (activeRoomData: RoomState) =>
      dispatch(setActiveRoom(activeRoomData)),
    resetRoom: () => {
      dispatch(resetRoom());
    },
  };
};

export default useActiveRoomStore;
