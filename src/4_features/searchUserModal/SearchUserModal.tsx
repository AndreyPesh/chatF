import Modal from '../../5_entities/modal/Modal';
import useSearchUserModalStore from './state/state';
import useQueryParticipant from '../../6_shared/hooks/useQueryParticipant';
import ParticipantPreview from '../../5_entities/participant/ParticipantPreview';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import { CreateRoomData } from '../../6_shared/api/chatRoom/types/chat-room.interfaces';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../6_shared/socket/events.enum';

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
  const { socket } = useChatSocketCtx();

  const startChatHandler = async (interlocutors: CreateRoomData) => {
    try {
      socket.emit(CHAT_EVENTS.JOIN_USER_TO_ROOM, {
        roomName: `${interlocutors.participantId} ${interlocutors.userId}`,
        userId: interlocutors.userId,
        socketId: socket.id,
        participantId: interlocutors.participantId,
      });
    } catch (error) {
      console.error(error);
    } finally {
      closeModal();
    }
  };

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
