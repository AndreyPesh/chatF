import Modal from '../../5_entities/modal/Modal';
import useSearchUserModalStore from './state/state';
import useQueryParticipant from '../../6_shared/hooks/useQueryParticipant';

const SearchUserModal = () => {
  const { participantList } = useQueryParticipant();

  return (
    <Modal management={useSearchUserModalStore}>
      <h1>Search user</h1>
      {participantList?.map((participant) => (
        <h1 className='underline'>
          {participant.firstName} {participant.lastName}
        </h1>
      ))}
    </Modal>
  );
};

export default SearchUserModal;
