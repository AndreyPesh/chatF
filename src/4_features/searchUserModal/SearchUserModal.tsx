import Modal from '../../5_entities/modal/Modal';
import useSearchUserModalStore from './state/state';
import useQueryParticipant from '../../6_shared/hooks/useQueryParticipant';
import ParticipantPreview from '../../5_entities/participant/ParticipantPreview';

const SearchUserModal = () => {
  const { participantList } = useQueryParticipant();

  return (
    <Modal management={useSearchUserModalStore}>
      <h1>Search user</h1>
      {participantList?.map((participant) => (
        <ParticipantPreview data={participant} />
      ))}
    </Modal>
  );
};

export default SearchUserModal;
