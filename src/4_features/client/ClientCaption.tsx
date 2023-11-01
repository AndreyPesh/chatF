import useInterlocutorDescriptionState from "../../6_shared/hooks/useInterlocutorDescriptionState";
import StatusClient from "../statusClient/StatusClient";
import ActionClient from "./ui/ActionClient";

const ClientCaption = () => {
  const { showInterlocutorDescription } = useInterlocutorDescriptionState();
  return (
    <div onClick={showInterlocutorDescription} className="py-6 px-8 flex w-full">
      <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
        <img src="/avatars/Robert.png" alt="Client photo" />
      </div>
      <div className="pl-[10px] grow">
        <h2 className="font-bold">Robert Fox</h2>
        <StatusClient />
      </div>
      <div>
        <ActionClient />
      </div>
    </div>
  );
};

export default ClientCaption;
