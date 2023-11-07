import { FC } from 'react';
import StatusMessage from '../statusMessage/StatusMessage';

interface UserMessageProps {
  userPhotoUrl: string;
  message: string;
  time: string;
}

const UserMessage: FC<UserMessageProps> = ({ userPhotoUrl, message, time }) => {
  return (
    <div className="my-3 flex justify-end">
      <div className="max-w-[340px] mr-4">
        <p className="p-5 bg-nephritis text-white leading-[18px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]">
          {message}
        </p>
        <div className="pt-2 w-full inline-flex justify-end items-center">
          <StatusMessage />
          <span className="ml-2 inline-flex text-concrete">
            {time} AM
          </span>
        </div>
      </div>
      <span className="mb-[29px] inline-flex w-12 h-12 self-end rounded-full overflow-hidden">
        <img src={userPhotoUrl} alt={`user`} />
      </span>
    </div>
  );
};

export default UserMessage;
