import { useEffect, useState } from 'react';
// import PreviewChat from './ui/PreviewChat';
// import useUserStore from '../../6_shared/hooks/store/useUserStore';
import { socket } from '../../6_shared/socket/socket';

interface Room {
  host: { unitName: string };
}

const ListChat = () => {
  // const { user } = useUserStore();
  const [rooms, setRooms] = useState<Room[]>([]);
  // const { conversationList } = useQueryConversation(user.id);

  useEffect(() => {
    socket.emit('list_rooms', () => {});

    socket.on('rooms', (rooms: Room[]) => {
      console.log('received rooms ', rooms);
      setRooms(() => {
        // if (prevRooms) return [...prevRooms, ...rooms];
        console.log('set rooms ');
        
        return rooms;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="max-w-[390px] pb-[260px] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      {rooms &&
        rooms.length > 0 &&
        rooms.map((room) => (
          <h1 key={room.host.unitName}>{room.host.unitName}</h1>
        ))}
      {/* {conversationList &&
        conversationList.map((conversation) => (
          <PreviewChat key={conversation.id} conversation={conversation} />
        ))} */}
    </div>
  );
};

export default ListChat;
