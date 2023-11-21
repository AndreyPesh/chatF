import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import { Room } from '../../socket/types/interface';
import { setRooms } from '../../store/roomList/slice';

const useRoomListStore = () => {
  const roomList = useAppSelector((state) => state.roomList);
  const dispatch = useAppDispatch();
  return {
    roomList,
    setRoomList: (rooms: Room[]) => dispatch(setRooms(rooms)),
  };
};

export default useRoomListStore;
