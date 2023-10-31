import CallAction from "./CallAction";
import OptionClient from "./OptionClient";
import VideoAction from "./VideoAction";

const ActionClient = () => {
  return (
    <div className="flex w-[180px] justify-between">
      <CallAction />
      <VideoAction />
      <OptionClient />
    </div>
  );
};

export default ActionClient;