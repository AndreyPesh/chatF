import { useEffect, useState } from 'react';
// import PreviewChat from './ui/PreviewChat';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import PreviewRoom from './ui/PreviewRoom';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../6_shared/socket/types/events.enum';
import { Room } from '../../6_shared/socket/types/interface';

const ListChat = () => {
  const { socket } = useChatSocketCtx();

  const { user } = useUserStore();
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const getRoomHandler = () => {
      socket.emit(
        CHAT_EVENTS.USER_LIST_ROOM,
        { userId: user.id, socketId: socket.id },
        (rooms: Room[]) => {
          setRooms(() => rooms);
        }
      );
    };

    if (socket.connected) {
      getRoomHandler();
    } else {
      socket.on('connect', getRoomHandler);
    }

    return () => {
      socket.off('connect', getRoomHandler);
    };
  }, [user.id, socket.id]);

  return (
    <div className="max-w-[390px] pb-[260px] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      {rooms &&
        rooms.length > 0 &&
        rooms.map(({ id, roomName, users }) => (
          <PreviewRoom key={id} roomName={roomName} id={id} users={users} />
        ))}
      {/* {conversationList &&
        conversationList.map((conversation) => (
          <PreviewChat key={conversation.id} conversation={conversation} />
        ))} */}
    </div>
  );
};

export default ListChat;
