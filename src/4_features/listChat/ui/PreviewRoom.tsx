import { FC } from 'react';
import useRoomStore from '../../../6_shared/hooks/store/useRoomStore';
import useUserStore from '../../../6_shared/hooks/store/useUserStore';
import { Room } from '../../../6_shared/socket/types/interface';

interface PreviewRoomProps extends Room {}

const PreviewRoom: FC<PreviewRoomProps> = ({
  id,
  roomName,
  users,
  messages,
}) => {
  const { user } = useUserStore();
  const { setActiveRoom } = useRoomStore();

  const showDiscussion = () => {
    setActiveRoom({ activeRoomName: roomName, id, users, roomName, messages });
  };

  const participant = users.find((userData) => userData.id !== user.id);

  return (
    <div
      onClick={showDiscussion}
      className="p-2 my-1 border border-gray-400 rounded-lg cursor-pointer"
    >
      <h1 className="text-center">
        {participant ? participant.fullName : roomName}
      </h1>
    </div>
  );
};

export default PreviewRoom;
