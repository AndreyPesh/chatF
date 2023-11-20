import { FC } from 'react';
import TimeMessage from './ui/TimeMessage';

interface InterlocutorProps {
  userPhotoUrl: string;
  message: string;
  time: Date;
}

const InterlocutorMessage: FC<InterlocutorProps> = ({
  userPhotoUrl,
  message,
  time,
}) => {
  return (
    <div className="my-3 flex">
      <span className="mb-[29px] inline-flex w-12 h-12 self-end rounded-full overflow-hidden">
        <img src={userPhotoUrl} alt={`user`} />
      </span>
      <div className="max-w-[340px] ml-4">
        <p className="p-5 bg-white leading-[18px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]">
          {message}
        </p>
        <TimeMessage time={time} />
      </div>
    </div>
  );
};

export default InterlocutorMessage;
