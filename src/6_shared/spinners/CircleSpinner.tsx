import { FC } from 'react';

const CircleSpinner: FC<{ quantity?: number }> = ({ quantity = 1 }) => {
  const circles = Array(quantity).fill('');
  return (
    <>
      {circles.map((_, index) => (
        <div
          key={index}
          className="mx-1 inline-block h-4 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-grayish align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ))}
    </>
  );
};

export default CircleSpinner;
