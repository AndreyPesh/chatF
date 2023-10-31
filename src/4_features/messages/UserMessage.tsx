import { FC } from 'react';

interface UserMessageProps {
  userPhotoUrl: string;
  message: string;
  time: string;
}

const UserMessage: FC<UserMessageProps> = ({ userPhotoUrl, message, time }) => {
  return (
    <div className="mt-5 flex justify-end">
      <div className="max-w-[340px] mr-4">
        <p className="p-5 bg-nephritis text-white leading-[18px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]">
          {message}
        </p>
        <span className="pt-2 inline-flex justify-end w-full text-concrete">{time} AM</span>
      </div>
      <span className="mb-[29px] inline-flex w-12 h-12 self-end rounded-full overflow-hidden">
        <img src={userPhotoUrl} alt={`user`} />
      </span>
    </div>
  );
};

export default UserMessage;
