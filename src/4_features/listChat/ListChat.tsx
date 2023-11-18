import { useEffect, useState } from 'react';
// import PreviewChat from './ui/PreviewChat';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
// import { socket } from '../../6_shared/socket/socket';
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

  // const getRooms = () => {
  //   console.log('get rooms');

  //   socket.emit('list_rooms', { userId: user.id, socketId: socket.id });
  // };

  // useEffect(() => {
  //   socket.connect();
  //   if (user.id && socket.id) {
  //     socket.on('connect', () => {
  //       console.log(`get list chats ${socket.id} and user ${user.id}`);
  //       socket.on(`rooms ${user.id}`, (rooms: Room[]) => {
  //         console.log(`rooms ${rooms}`);

  //         setRooms(() => {
  //           return rooms;
  //         });
  //       });
  //       socket.emit('list_rooms', { userId: user.id, socketId: socket.id });
  //     });
  //   }
  //   console.log(`connect socket ${socket.connected} user ${user.id} socket id ${socket.id}`);

  // return () => {
  // socket.off('connect');
  // socket.off('disconnect');
  // socket.off('chat');
  // };
  // }, [socket.id, user.id]);

  useEffect(() => {
    const roomEvents = () => {
      if (user.id && socket.id) {
        console.log(`get list chats ${socket.id} and user ${user.id}`);
        // socket.on(`rooms ${user.id}`, (rooms: Room[]) => {
        //   console.log(`rooms ${rooms}`);
        //   setRooms(() => {
        //     return rooms;
        //   });
        // });
        // setIsRoomListening(true);
        socket.emit(
          'list_rooms',
          { userId: user.id, socketId: socket.id },
          (rooms: Room[]) => {
            console.log(`list rooms listener ${rooms}`);
            setRooms(() => {
              return rooms;
            });
          }
        );
      }
    };
    socket.on('connect', roomEvents);

    // console.log('ID ', socket.id + ' ' + socket.connected);

    return () => {
      socket.off('connect', roomEvents);
      socket.off('list_rooms');
      // socket.off(`rooms ${user.id}`);
    };
  }, [user.id, socket.connected]);

  useEffect(() => {
    // no-op if the socket is already connected
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
