import { FC } from 'react';
import classNames from 'classnames';
import useRoomStore from '../../../6_shared/hooks/store/useRoomStore';
import useUserStore from '../../../6_shared/hooks/store/useUserStore';
import { Room } from '../../../6_shared/socket/types/interface';
import ParticipantName from './ParticipantName';
import StatusMessage from '../../statusMessage/StatusMessage';

interface PreviewRoomProps extends Room {}

const PreviewRoom: FC<PreviewRoomProps> = ({
  id,
  roomName,
  users,
  messages,
}) => {
  const { user } = useUserStore();
  const { room, setActiveRoom } = useRoomStore();

  const showDiscussion = () => {
    setActiveRoom({ activeRoomName: roomName, id, users, roomName, messages });
  };

  const participant = users.find((userData) => userData.id !== user.id);
  const isActiveRoom = room.id === id;

  return (
    <div
      onClick={showDiscussion}
      className={classNames('pl-6 pt-6 pr-6 cursor-pointer', {
        'border-l-[6px] border-l-nephritis bg-light-nephritis': isActiveRoom,
        'border-l-[6px] border-l-white': !isActiveRoom,
      })}
    >
      <div className="pb-6 flex border-b border-b-light">
        <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
          <img src="/avatars/Avatar1.png" alt="user" />
        </div>
        <div className="ml-[10px] max-w-[195px]">
          <ParticipantName participant={participant} />
          <p className="max-h-[37px] font-regular text-dark leading-[18px] font-[14px] overflow-hidden">
            Not too bad, just trying to catch up on some work. How about you?
          </p>
        </div>
        <div className="pl-[28px] flex flex-col justify-between">
          <span className="font-medium text-concrete">2h</span>
          <StatusMessage />
        </div>
      </div>
    </div>
  );
};

export default PreviewRoom;
