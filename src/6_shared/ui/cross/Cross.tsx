import { FC } from 'react';

interface CrossProps {
  handler: () => void;
  size: { width: string; height: string };
}

const Cross: FC<CrossProps> = ({ handler, size }) => {
  return (
    <span
      onClick={() => handler()}
      className={`right-8 top-8 inline-flex sm:w-[${size.width}] sm:h-[${size.height}] w-[32px] h-[32px] rounded-full bg-cross bg-no-repeat bg-center md:border-2 border-light transition-all cursor-pointer active:scale-90`}
    ></span>
  );
};

export default Cross;
