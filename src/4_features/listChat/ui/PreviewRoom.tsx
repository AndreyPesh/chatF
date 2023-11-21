import { FC } from 'react';
import classNames from 'classnames';
import useActiveRoomStore from '../../../6_shared/hooks/store/useActiveRoomStore';
import useUserStore from '../../../6_shared/hooks/store/useUserStore';
import { Room } from '../../../6_shared/socket/types/interface';
import ParticipantName from './ParticipantName';
import StatusMessage from '../../statusMessage/StatusMessage';
import UnreadMessageIndicator from './UnreadMessageIndicator';
import { unreadMessageCounter } from '../utils/unreadMessageCounter';

interface PreviewRoomProps extends Room {}

const PreviewRoom: FC<PreviewRoomProps> = ({
  id,
  roomName,
  users,
  messages,
}) => {
  const { user } = useUserStore();
  const { activeRoom, setActiveRoom } = useActiveRoomStore();

  const showDiscussion = () => {
    setActiveRoom({ id, users, roomName, messages });
  };

  const participant = users.find((userData) => userData.id !== user.id);
  const isActiveRoom = activeRoom.id === id;
  const lastMessageStatus =
    messages.length >= 1 ? messages[messages.length - 1].isReaded : null;
  const lastMessage =
    messages.length >= 1 ? messages[messages.length - 1].content : '';
  const numberOfUnreadMessages = unreadMessageCounter(messages, user.id);

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
        <div className="ml-[10px] max-w-[195px] grow">
          <ParticipantName participant={participant} />
          <p className="max-h-[37px] font-regular text-dark leading-[18px] font-[14px] overflow-hidden">
            {/* Not too bad, just trying to catch up on some work. How about you? */}
            {lastMessage}
          </p>
        </div>
        <div className="pl-[28px] flex flex-col justify-between">
          <span className="font-medium text-concrete">2h</span>
          {lastMessageStatus !== null ? (
            <StatusMessage isReaded={lastMessageStatus} />
          ) : (
            ''
          )}
          <UnreadMessageIndicator value={numberOfUnreadMessages} />
        </div>
      </div>
    </div>
  );
};

export default PreviewRoom;
