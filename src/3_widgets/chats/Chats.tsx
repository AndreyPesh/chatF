import ListChat from '../../4_features/listChat/ListChat';
import SearchField from '../../4_features/searchField/SearchField';
import Button from '../../6_shared/buttons/Button';
import { TYPE_BUTTON } from '../../6_shared/enums/buttons';
import Title from '../../6_shared/titles/Title';
import Conversation from '../conversation/Conversation';
import InterlocutorDescription from '../interlocutor/InterlocutorDescription';

const Chats = () => {
  return (
    <div className="relative flex w-full overflow-hidden">
      <div>
        <Title>Messages</Title>
        <div className="p-5 w-[380px]">
          <SearchField />
          <Button sign="Start New Chat" type={TYPE_BUTTON.NEPHRITE} />
        </div>
        <ListChat />
      </div>
      <Conversation />
      <InterlocutorDescription />
    </div>
  );
};

export default Chats;
