import classNames from 'classnames';

const UnreadMessageIndicator = ({ value }: { value: number }) => {
  return (
    <div
      className={classNames(
        'w-6 h-6 inline-flex items-center justify-center bg-red text-white rounded-full',
        { hidden: value === 0 }
      )}
    >
      {value}
    </div>
  );
};

export default UnreadMessageIndicator;
