import classNames from 'classnames';
import { STATUS_MESSAGE } from '../../6_shared/enums/status';
import { useEffect, useState } from 'react';

const StatusMessage = () => {
  const [status, setStatus] = useState(STATUS_MESSAGE.UNREAD);

  useEffect(() => {
    if (Math.random() > 0.5) {
      setStatus(STATUS_MESSAGE.READ);
    }
  }, []);

  return (
    <span
      className={classNames(
        'w-5 h-5 inline-flex bg-no-repeat bg-center',
        { 'bg-read': status === STATUS_MESSAGE.READ },
        { 'bg-unread': status === STATUS_MESSAGE.UNREAD }
      )}
    ></span>
  );
};

export default StatusMessage;
