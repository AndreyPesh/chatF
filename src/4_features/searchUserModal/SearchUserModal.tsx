import Modal from '../../5_entities/modal/Modal';
import useSearchUserModalStore from './state/state';

const SearchUserModal = () => {
  return (
    <Modal management={useSearchUserModalStore}>
      <h1>Search user</h1>
    </Modal>
  );
};

export default SearchUserModal;
