import { FC } from 'react';

interface CrossProps {
  handler: () => void;
  size: { width: string; height: string };
}

const Cross: FC<CrossProps> = ({ handler, size }) => {
  return (
    <span
      onClick={() => handler()}
      className={`right-8 top-8 inline-flex w-[${size.width}] h-[${size.height}] rounded-full bg-cross bg-no-repeat bg-center border-2 border-light transition-all cursor-pointer active:scale-90`}
    ></span>
  );
};

export default Cross;
