import { FC } from 'react';
import useRoomStore from '../../../6_shared/hooks/store/useRoomStore';
import useUserStore from '../../../6_shared/hooks/store/useUserStore';

interface PreviewRoomProps {
  name: string;
  users: [{ id: string; fullName: string }];
}

const PreviewRoom: FC<PreviewRoomProps> = ({ name, users }) => {
  const { user } = useUserStore();
  const { setActiveRoom } = useRoomStore();

  const showDiscussion = () => {
    setActiveRoom({ activeRoomName: name });
  };

  const participant = users.find((userData) => userData.id !== user.id);

  return (
    <div
      onClick={showDiscussion}
      className="p-2 my-1 border border-gray-400 rounded-lg cursor-pointer"
    >
      <h1 className="text-center">
        {participant ? participant.fullName : name}
      </h1>
    </div>
  );
};

export default PreviewRoom;
