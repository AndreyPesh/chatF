import useInterlocutorDescriptionState from '../../6_shared/hooks/store/useInterlocutorDescriptionState';
import useActiveRoomStore from '../../6_shared/hooks/store/useActiveRoomStore';
import StatusClient from '../statusClient/StatusClient';
import { DEFAULT_USERNAME } from './types/client.constants';
import ActionClient from './ui/ActionClient';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import Cross from '../../6_shared/ui/cross/Cross';

const ClientCaption = () => {
  const { activeRoom, resetRoom } = useActiveRoomStore();
  const { user } = useUserStore();
  const { showInterlocutorDescription } = useInterlocutorDescriptionState();

  if (!activeRoom.id) {
    return null;
  }

  const participant = activeRoom.users.find((userData) => {
    if (userData.id !== user.id) return userData;
  });

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
      <div className="ml-3  md:hidden">
        <Cross
          handler={() => resetRoom()}
          size={{ width: '52px', height: '52px' }}
        />
      </div>
    </div>
  );
};

export default ClientCaption;
