import { FC } from 'react';
import { UserInRoom } from '../../../6_shared/socket/types/interface';

interface ParticipantNameProps {
  participant?: UserInRoom;
}

const ParticipantName: FC<ParticipantNameProps> = ({ participant }) => {
  if (!participant) {
    return <h2 className="font-bold font-4">User</h2>;
  }
  return <h2 className="font-bold font-4">{participant.fullName}</h2>;
};

export default ParticipantName;
