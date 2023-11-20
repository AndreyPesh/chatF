import useInterlocutorDescriptionState from '../../6_shared/hooks/store/useInterlocutorDescriptionState';
import useRoomStore from '../../6_shared/hooks/store/useRoomStore';
import StatusClient from '../statusClient/StatusClient';
import { DEFAULT_USERNAME } from './types/client.constants';
import ActionClient from './ui/ActionClient';

const ClientCaption = () => {
  const { room } = useRoomStore();
  const { showInterlocutorDescription } = useInterlocutorDescriptionState();

  if (!room.activeRoomName) {
    return null;
  }

  const participant = room.users.find((user) => user.isParticipant);

  return (
    <div className="sticky top-0 py-6 px-8 flex w-full bg-white z-10">
      <div
        onClick={showInterlocutorDescription}
        className="w-[52px] h-[52px] rounded-full overflow-hidden cursor-pointer"
      >
        <img src="/avatars/Robert.png" alt="Client photo" />
      </div>
      <div
        onClick={showInterlocutorDescription}
        className="pl-[10px] grow cursor-pointer"
      >
        <h2 className="font-bold">
          {participant ? participant.fullName : DEFAULT_USERNAME}
        </h2>
        <StatusClient />
      </div>
      <div>
        <ActionClient />
      </div>
    </div>
  );
};

export default ClientCaption;
