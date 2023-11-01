import { useState } from 'react';

const Notifications = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='py-[26px] inline-flex w-full justify-between items-center border-t border-t-light'>
      <h2 className='font-bold text-base'>Notifications</h2>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? 'bg-nephritis' : 'bg-gray-300'
            } ${!isChecked ? 'border-2 border-nephritis' : ''}`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            } ${!isChecked ? 'border-2 border-nephritis' : ''}` }
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Notifications;
