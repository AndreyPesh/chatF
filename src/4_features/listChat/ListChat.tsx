import { useEffect, useState } from 'react';
// import PreviewChat from './ui/PreviewChat';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import PreviewRoom from './ui/PreviewRoom';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';

interface Room {
  id: string;
  // host: { unitName: string };
  roomName: string;
  users: [{ id: string; fullName: string }];
}

const ListChat = () => {
  const { socket } = useChatSocketCtx();

  const { user } = useUserStore();
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    if (socket.connected) {
      socket.emit(
        'list_rooms',
        { userId: user.id, socketId: socket.id },
        (rooms: Room[]) => {
          setRooms(() => {
            return rooms;
          });
        }
      );
    }
  }, [user.id, socket.connected]);

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="max-w-[390px] pb-[260px] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      {rooms &&
        rooms.length > 0 &&
        rooms.map((room) => (
          <PreviewRoom key={room.id} name={room.roomName} users={room.users} />
        ))}
      {/* {conversationList &&
        conversationList.map((conversation) => (
          <PreviewChat key={conversation.id} conversation={conversation} />
        ))} */}
      {/* <button onClick={getRooms}>Get rooms</button> */}
    </div>
  );
};

export default ListChat;
