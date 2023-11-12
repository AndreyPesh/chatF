import { FC } from 'react';
import { Participant } from '../../6_shared/api/user/interfaces/user';

interface ParticipantPreviewProps {
  data: Participant;
  startChatHandler: () => void;
}

const ParticipantPreview: FC<ParticipantPreviewProps> = ({
  data,
  startChatHandler,
}) => {
  const { firstName, lastName } = data;
  const initialsName = firstName.charAt(0) + lastName.charAt(0);
  return (
    <div
      onClick={startChatHandler}
      className="p-2 my-1 min-w-[300px] flex border border-gray rounded-lg cursor-pointer transition-all active:scale-95"
    >
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-nephritis text-white uppercase">
        {initialsName}
      </div>
      <p className="pl-2 inline-flex items-center justify-center font-bold select-none">
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default ParticipantPreview;
