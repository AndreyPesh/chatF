import { useEffect, useState } from 'react';
// import PreviewChat from './ui/PreviewChat';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import { socket } from '../../6_shared/socket/socket';
import PreviewRoom from './ui/PreviewRoom';

interface Room {
  id: string;
  // host: { unitName: string };
  roomName: string;
  users: [{ id: string; fullName: string }];
}

const ListChat = () => {
  const { user } = useUserStore();
  const [rooms, setRooms] = useState<Room[]>([]);
  // const { conversationList } = useQueryConversation(user.id);

  const getRooms = () => {
    console.log('get rooms');

    socket.emit('list_rooms', { userId: user.id });
  };

  useEffect(() => {
    if (user.id) {
      console.log('emit ', user.id);

      socket.emit('list_rooms', { userId: user.id });
    }

    socket.on('rooms', (rooms: Room[]) => {
      console.log('received rooms ', rooms);
      setRooms(() => {
        return rooms;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [user, user.id]);

  // useEffect(() => {
  //   if (socket.disconnected) socket.connect();
  // }, []);

  return (
    <div className="max-w-[390px] pb-[260px] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      {rooms &&
        rooms.length > 0 &&
        rooms.map((room) => <PreviewRoom key={room.id} name={room.roomName} users={room.users} />)}
      {/* {conversationList &&
        conversationList.map((conversation) => (
          <PreviewChat key={conversation.id} conversation={conversation} />
        ))} */}
      <button onClick={getRooms}>Get rooms</button>
    </div>
  );
};

export default ListChat;
