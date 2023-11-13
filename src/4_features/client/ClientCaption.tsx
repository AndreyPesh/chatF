import useConversationStore from '../../6_shared/hooks/store/useConversationStore';
import useInterlocutorDescriptionState from '../../6_shared/hooks/store/useInterlocutorDescriptionState';
import StatusClient from '../statusClient/StatusClient';
import ActionClient from './ui/ActionClient';

const ClientCaption = () => {
  const { conversation } = useConversationStore();
  const { showInterlocutorDescription } = useInterlocutorDescriptionState();

  if (!conversation.activeId) {
    return null;
  }

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
        <h2 className="font-bold">{conversation.participantData?.fullName}</h2>
        <StatusClient />
      </div>
      <div>
        <ActionClient />
      </div>
    </div>
  );
};

export default ClientCaption;
