import useInterlocutorDescriptionState from '../../6_shared/hooks/store/useInterlocutorDescriptionState';
import useActiveRoomStore from '../../6_shared/hooks/store/useActiveRoomStore';
import StatusClient from '../statusClient/StatusClient';
import { DEFAULT_USERNAME } from './types/client.constants';
import ActionClient from './ui/ActionClient';
import useUserStore from '../../6_shared/hooks/store/useUserStore';

const ClientCaption = () => {
  const { activeRoom } = useActiveRoomStore();
  const { user } = useUserStore();
  const { showInterlocutorDescription } = useInterlocutorDescriptionState();

  if (!activeRoom.id) {
    return null;
  }

  const participant = activeRoom.users.find((userData) => {
    if (userData.id !== user.id) return userData;
  });

  return (
    <div className="sticky top-0 py-3 px-1 sm:py-6 sm:px-8 flex items-center w-full bg-white z-10">
      <div
        onClick={showInterlocutorDescription}
        className="w-[32px] h-[32px] sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden cursor-pointer"
      >
        <img src="/avatars/Robert.png" alt="Client photo" />
      </div>
      <div
        onClick={showInterlocutorDescription}
        className="pl-[10px] grow cursor-pointer"
      >
        <h2 className="font-bold text-xs md:text-lg">
          {participant ? participant.fullName : DEFAULT_USERNAME}
        </h2>
        <StatusClient />
      </div>

      <ActionClient />
    </div>
  );
};

export default ClientCaption;
