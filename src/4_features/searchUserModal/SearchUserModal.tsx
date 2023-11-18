import Modal from '../../5_entities/modal/Modal';
import useSearchUserModalStore from './state/state';
import useQueryParticipant from '../../6_shared/hooks/useQueryParticipant';
import ParticipantPreview from '../../5_entities/participant/ParticipantPreview';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
// import chatRoomAPI from '../../6_shared/api/chatRoom/chatRoomAPI';
import { CreateRoomData } from '../../6_shared/api/chatRoom/types/chat-room.interfaces';
// import { socket } from '../../6_shared/socket/socket';
import { useEffect } from 'react';

// interface JoinRoomData {
//   roomName: string;
//   userId: string;
//   socketId: string;
//   participantId: string;
//   // unit: {
//   // unitId: string;
//   // unitName: string;
//   // };
// }

const SearchUserModal = () => {
  const { user } = useUserStore();
  const { closeModal } = useSearchUserModalStore();
  const { participantList } = useQueryParticipant();

  const startChatHandler = async (interlocutors: CreateRoomData) => {
    try {
      // socket.emit('join_room', {
      //   roomName: `${interlocutors.participantId} ${interlocutors.userId}`,
      //   userId: interlocutors.userId,
      //   socketId: socket.id,
      //   participantId: interlocutors.participantId,
      // });
    } catch (error) {
      console.error(error);
    } finally {
      closeModal();
    }
  };

  // useEffect(() => {
  //   // socket.connect();
  //   socket.on('connect', () => {
  //     console.log('socket connected');
  //   });
  //   return () => {
  //     // socket.disconnect();
  //   };
  // }, []);

  return (
    <Modal management={useSearchUserModalStore}>
      <h1>Search user</h1>
      {participantList?.map((participant) => (
        <ParticipantPreview
          key={participant.id}
          data={participant}
          startChatHandler={() =>
            startChatHandler({ userId: user.id, participantId: participant.id })
          }
        />
      ))}
    </Modal>
  );
};

export default SearchUserModal;
