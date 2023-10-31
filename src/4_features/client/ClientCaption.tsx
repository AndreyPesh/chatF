import StatusClient from "../statusClient/StatusClient";

const ClientCaption = () => {
  return (
    <div className="flex">
      <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
        <img src="/avatars/Robert.png" alt="Client photo" />
      </div>
      <div className="pl-[10px]">
        <h2 className="font-bold">Robert Fox</h2>
        <StatusClient />
      </div>
    </div>
  );
};

export default ClientCaption;
