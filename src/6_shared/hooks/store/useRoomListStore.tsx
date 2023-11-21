import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import { Room } from '../../socket/types/interface';
import { updateActiveRoomMessageList } from '../../store/room/slice';
import { setRooms, updateRoomById } from '../../store/roomList/slice';

const useRoomListStore = () => {
  const roomList = useAppSelector((state) => state.roomList);
  const dispatch = useAppDispatch();
  return {
    roomList,
    setRoomList: (rooms: Room[]) => dispatch(setRooms(rooms)),
    updateCommonAndActiveRooms: (updatedRoom: Room) => {
      dispatch(updateActiveRoomMessageList(updatedRoom));
      dispatch(updateRoomById(updatedRoom));
    },
  };
};

export default useRoomListStore;
