import { FC } from 'react';
import classNames from 'classnames';
import useActiveRoomStore from '../../../6_shared/hooks/store/useActiveRoomStore';
import useUserStore from '../../../6_shared/hooks/store/useUserStore';
import { Room } from '../../../6_shared/socket/types/interface';
import ParticipantName from './ParticipantName';
import StatusMessage from '../../statusMessage/StatusMessage';
import UnreadMessageIndicator from './UnreadMessageIndicator';
import {
  getLastMessageFromDiscuss,
  getLastMessageStatus,
  unreadMessageCounter,
} from '../utils/lastMessageDescription';

interface PreviewRoomProps {
  roomData: Room;
}

const PreviewRoom: FC<PreviewRoomProps> = ({ roomData }) => {
  const { id, roomName, users, messages, numberOfUnreadMessage } = roomData;
  const { user } = useUserStore();
  const { activeRoom, setActiveRoom } = useActiveRoomStore();

  const participant = users.find((userData) => userData.id !== user.id);
  const isActiveRoom = activeRoom.id === id;
  const lastMessageStatus = getLastMessageStatus(messages);
  const lastMessage = getLastMessageFromDiscuss(messages);
  // const numberOfUnreadMessages = unreadMessageCounter(messages, user.id);

  const showDiscussion = () => {
    setActiveRoom({
      id,
      users,
      roomName,
      messages,
      numberOfUnreadMessage,
    });
  };

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
            {lastMessage}
          </p>
        </div>
        <div className="pl-[28px] flex flex-col justify-between">
          <span className="font-medium text-concrete">2h</span>
          {lastMessageStatus !== null && numberOfUnreadMessage === 0 && (
            <StatusMessage isReaded={lastMessageStatus} />
          )}
          <UnreadMessageIndicator value={numberOfUnreadMessage} />
        </div>
      </div>
    </div>
  );
};

export default PreviewRoom;
