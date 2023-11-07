import { FC } from 'react';

interface FileProps {
  filename: string;
}

const File: FC<FileProps> = ({ filename }) => {
  return (
    <div className="flex items-center">
      <span className="w-8 h-8 inline-flex bg-file bg-center bg-no-repeat"></span>
      <a href={`#${filename}`} className='grow'>{filename}</a>
      <span className='w-8 h-8 inline-flex bg-option bg-right bg-no-repeat cursor-pointer'></span>
    </div>
  );
};

export default File;
