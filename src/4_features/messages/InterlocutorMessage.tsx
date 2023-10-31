import { FC } from 'react';

interface InterlocutorProps {
  userPhotoUrl: string;
  message: string;
  time: string;
}

const InterlocutorMessage: FC<InterlocutorProps> = ({
  userPhotoUrl,
  message,
  time,
}) => {
  return (
    <div className='flex'>
      <span className='mb-[29px] inline-flex w-12 h-12 self-end rounded-full overflow-hidden'>
        <img src={userPhotoUrl} alt={`user`} />
      </span>
      <div className='max-w-[340px] ml-4'>
        <p className='p-5 bg-white font-medium leading-[18px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]'>{message}</p>
        <span className='pt-2 font-medium text-concrete'>{time} AM</span>
      </div>
    </div>
  );
};

export default InterlocutorMessage;
