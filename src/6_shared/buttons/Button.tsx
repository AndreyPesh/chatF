import { FC } from 'react';
import { TYPE_BUTTON } from '../enums/buttons';
import classNames from 'classnames';

interface ButtonProps {
  sign: string;
  type: TYPE_BUTTON;
  handler?: () => void
}

const Button: FC<ButtonProps> = ({ sign, type, handler }) => {
  return (
    <button
    onClick={handler}
      className={classNames('my-3 py-3 inline-flex w-full items-center justify-center text-white font-medium font-4 rounded-full transition-transform active:scale-90', {
        'bg-nephritis': type === TYPE_BUTTON.NEPHRITE,
      }, {'border-2 border-red': type === TYPE_BUTTON.DANGER})}
    >
      <span className="mr-2 inline-flex w-[20px] h-[20px] bg-plus"></span>
      <span>{sign}</span>
    </button>
  );
};

export default Button;
