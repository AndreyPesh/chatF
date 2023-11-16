import { FC } from 'react';

interface PreviewRoomProps {
  name: string;
}

const PreviewRoom: FC<PreviewRoomProps> = ({ name }) => {
  return (
    <div className="p-2 my-1 border border-gray-400 rounded-lg cursor-pointer">
      <h1 className="text-center">{name}</h1>
    </div>
  );
};

export default PreviewRoom;
