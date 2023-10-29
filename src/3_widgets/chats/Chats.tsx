import SearchField from '../../4_features/searchField/SearchField';
import Button from '../../6_shared/buttons/Button';
import { TYPE_BUTTON } from '../../6_shared/enums/buttons';
import Title from '../../6_shared/titles/Title';

const Chats = () => {
  return (
    <div>
      <Title>Messages</Title>
      <div>
        <SearchField />
        <Button sign="Start New Chat" type={TYPE_BUTTON.NEPHRITE} />
      </div>
    </div>
  );
};

export default Chats;
