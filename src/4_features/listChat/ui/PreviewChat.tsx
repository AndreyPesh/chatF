import { FC } from 'react';
import classNames from 'classnames';
import StatusMessage from '../../statusMessage/StatusMessage';
import { ConversationData } from '../../../6_shared/api/conversation/interfaces/interface';
import ParticipantName from './ParticipantName';
import useConversationStore from '../../../6_shared/hooks/store/useConversationStore';

interface PreviewChatProps {
  conversation: ConversationData;
}

const PreviewChat: FC<PreviewChatProps> = ({ conversation }) => {
  const { conversation: chat, setActiveConversation } = useConversationStore();
  const participant = conversation.users.find((user) => user.isParticipant);
  const isActive = chat.activeId === conversation.id;
  return (
    <div
      onClick={() => setActiveConversation({ id: conversation.id })}
      className={classNames('pl-6 pt-6 pr-6 cursor-pointer', {
        'border-l-[6px] border-l-nephritis bg-light-nephritis': isActive,
        'border-l-[6px] border-l-white': !isActive,
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

export default PreviewChat;
