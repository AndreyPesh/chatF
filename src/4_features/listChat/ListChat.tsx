import { useEffect } from 'react';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import PreviewRoom from './ui/PreviewRoom';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../6_shared/socket/types/events.enum';
import { Room } from '../../6_shared/socket/types/interface';
import useRoomListStore from '../../6_shared/hooks/store/useRoomListStore';

const ListChat = () => {
  const { socket } = useChatSocketCtx();

  const { user } = useUserStore();
  const { roomList, setRoomList, updateCommonAndActiveRooms } =
    useRoomListStore();

  useEffect(() => {
    const getRoomHandler = () => {
      socket.on(
        CHAT_EVENTS.UPDATE_ROOM_LISTENER,
        ({ room }: { room: Room }) => {
          updateCommonAndActiveRooms(room);
        }
      );
      socket.emit(
        CHAT_EVENTS.USER_LIST_ROOM,
        { userId: user.id, socketId: socket.id },
        (rooms: Room[]) => {
          if (rooms) setRoomList(rooms);
        }
      );
    };

    if (socket.connected) {
      getRoomHandler();
    } else {
      socket.on(CHAT_EVENTS.CONNECT, getRoomHandler);
    }

    return () => {
      socket.off(CHAT_EVENTS.CONNECT, getRoomHandler);
      socket.off(CHAT_EVENTS.UPDATE_ROOM_LISTENER);
    };
  }, [user.id, socket.id]);

  return (
    <div className="w-full sm:max-w-[390px] pb-[260px] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      {roomList.length > 0 &&
        roomList.map((roomData) => (
          <PreviewRoom key={roomData.id} roomData={roomData} />
        ))}
    </div>
  );
};

export default ListChat;
