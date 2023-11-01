import InterlocutorInfo from "../../4_features/interlocutor/InterlocutorInfo";
import Notifications from "./Notifications";

const InterlocutorDescription = () => {
  return <div className="p-8 w-[372px]">
    <InterlocutorInfo />
    <Notifications />
  </div>;
};

export default InterlocutorDescription;
