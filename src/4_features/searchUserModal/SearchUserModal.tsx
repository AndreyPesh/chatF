import Modal from '../../5_entities/modal/Modal';
import useSearchUserModalStore from './state/state';
import useQueryParticipant from '../../6_shared/hooks/useQueryParticipant';
import ParticipantPreview from '../../5_entities/participant/ParticipantPreview';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import { InterlocutorsData } from '../../6_shared/api/conversation/interfaces/interface';
import ConversationAPI from '../../6_shared/api/conversation/ConversationAPI';

const SearchUserModal = () => {
  const { closeModal } = useSearchUserModalStore();
  const { participantList } = useQueryParticipant();
  const { user } = useUserStore();

  const startChatHandler = async (interlocutors: InterlocutorsData) => {
    try {
      await ConversationAPI.createConversation(interlocutors);
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
