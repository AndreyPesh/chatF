import ListChat from '../../4_features/listChat/ListChat';
import SearchField from '../../4_features/searchField/SearchField';
import SearchUserModal from '../../4_features/searchUserModal/SearchUserModal';
import useSearchUserModalStore from '../../4_features/searchUserModal/state/state';
import Button from '../../6_shared/buttons/Button';
import { TYPE_BUTTON } from '../../6_shared/enums/buttons';
import Title from '../../6_shared/titles/Title';
import Conversation from '../conversation/Conversation';
import InterlocutorDescription from '../interlocutor/InterlocutorDescription';

const Chats = () => {
  const { openModal } = useSearchUserModalStore();

  return (
    <>
      <div className="relative flex w-full overflow-hidden">
        <div>
          <Title>Messages</Title>
          <div className="p-5 w-[380px]">
            <SearchField />
            <Button
              sign="Start New Chat"
              type={TYPE_BUTTON.NEPHRITE}
              handler={() => openModal()}
            />
          </div>
          <ListChat />
        </div>
        <Conversation />
        <InterlocutorDescription />
      </div>
      <SearchUserModal />
    </>
  );
};

export default Chats;
