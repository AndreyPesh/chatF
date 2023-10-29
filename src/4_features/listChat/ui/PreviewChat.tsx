import classNames from 'classnames';

const PreviewChat = ({ isActive }: { isActive: boolean }) => {
  return (
    <div
      className={classNames('pl-6 pt-6 pr-6 cursor-pointer', {
        'border-l-[6px] border-l-nephritis bg-light-nephritis': isActive,
      })}
    >
      <div className="pb-6 flex border-b border-b-light">
        <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
          <img src="/public/avatars/Avatar1.png" alt="user" />
        </div>
        <div className="ml-[10px] max-w-[195px]">
          <h2 className="font-bold font-4">Cameron Williamson</h2>
          <p className="max-h-[37px] font-regular text-dark leading-[18px] font-[14px] overflow-hidden">
            Not too bad, just trying to catch up on some work. How about you?
          </p>
        </div>
        <div className="pl-[35px] flex flex-col justify-between">
          <span className="font-medium text-concrete">2h</span>
          <span className="inline-flex w-6 h-6">xx</span>
        </div>
      </div>
    </div>
  );
};

export default PreviewChat;
