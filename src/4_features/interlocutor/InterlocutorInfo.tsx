const InterlocutorInfo = () => {
  return (
    <div className="py-8 w-full flex flex-col items-center">
      <div className="w-[136px] h-[136px] border-2 border-nephritis rounded-full overflow-hidden">
        <img src="/avatars/Robert.png" alt="Interlocutor photo" />
      </div>
      <h2 className="pt-4 text-center font-bold text-2xl">Robert Fox</h2>
      <a href="mailto:@robert.fox12">@robert.fox12</a>
    </div>
  );
};

export default InterlocutorInfo;
