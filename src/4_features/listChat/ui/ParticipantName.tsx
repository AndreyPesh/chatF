import { FC } from 'react';
import { ConversationUserData } from '../../../6_shared/api/conversation/interfaces/interface';

interface ParticipantNameProps {
  participant?: ConversationUserData;
}

const ParticipantName: FC<ParticipantNameProps> = ({ participant }) => {
  if (!participant) {
    return <h2 className="font-bold font-4">User</h2>;
  }
  return <h2 className="font-bold font-4">{participant.fullName}</h2>;
};

export default ParticipantName;
