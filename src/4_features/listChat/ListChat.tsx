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
  const { roomList, setRoomList, updateRoom } = useRoomListStore();

  useEffect(() => {
    const getRoomHandler = () => {
      socket.on(CHAT_EVENTS.UPDATE_ROOM_LISTENER, (updatedRoom: Room) => {
        updateRoom(updatedRoom);
      });
      socket.emit(
        CHAT_EVENTS.USER_LIST_ROOM,
        { userId: user.id, socketId: socket.id },
        (rooms: Room[]) => {
          setRoomList(rooms);
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
    <div className="max-w-[390px] pb-[260px] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      {roomList &&
        roomList.length > 0 &&
        roomList.map(({ id, roomName, users, messages }) => (
          <PreviewRoom
            key={id}
            roomName={roomName}
            id={id}
            users={users}
            messages={messages}
          />
        ))}
    </div>
  );
};

export default ListChat;
