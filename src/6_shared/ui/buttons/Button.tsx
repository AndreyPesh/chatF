import { FC } from 'react';
import { TYPE_BUTTON } from '../../enums/buttons';
import classNames from 'classnames';
import CircleSpinner from '../spinners/CircleSpinner';

interface ButtonProps {
  sign: string;
  type: TYPE_BUTTON;
  isLoading?: boolean;
  handler?: () => void;
}

const Button: FC<ButtonProps> = ({ sign, type, isLoading, handler }) => {
  return (
    <button
      onClick={handler}
      className={classNames(
        'my-3 py-3 inline-flex w-full min-w-[300px] min-h-[48px] items-center justify-center font-medium font-4 rounded-full transition-transform active:scale-90 disabled:cursor-not-allowed disabled:scale-100 disabled:bg-opacity-70',
        {
          'bg-nephritis text-white': type === TYPE_BUTTON.NEPHRITE,
        },
        { 'border-2 border-red text-red': type === TYPE_BUTTON.DANGER },
        { 'bg-nephritis text-white': type === TYPE_BUTTON.LOGIN },
      )}
      disabled={isLoading}
    >
      {!isLoading && (
        <span
          className={classNames(
            'mr-2 inline-flex w-[20px] h-[20px] bg-no-repeat bg-center',
            { 'bg-plus': type === TYPE_BUTTON.NEPHRITE },
            { 'bg-block': type === TYPE_BUTTON.DANGER },
            { 'bg-login': type === TYPE_BUTTON.LOGIN }
          )}
        />
      )}
      {!isLoading && <span>{sign}</span>}
      {isLoading && <CircleSpinner quantity={3} />}
    </button>
  );
};

export default Button;
