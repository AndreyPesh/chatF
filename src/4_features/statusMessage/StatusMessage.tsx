import { FC } from 'react';
import classNames from 'classnames';

interface StatusMessageProps {
  isReaded: boolean;
}

const StatusMessage: FC<StatusMessageProps> = ({ isReaded }) => {
  return (
    <span
      className={classNames(
        'w-5 h-5 inline-flex bg-no-repeat bg-center',
        { 'bg-read': isReaded },
        { 'bg-unread': !isReaded }
      )}
    ></span>
  );
};

export default StatusMessage;
