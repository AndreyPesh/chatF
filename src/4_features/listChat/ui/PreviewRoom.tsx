import { FC } from 'react';
import useRoomStore from '../../../6_shared/hooks/store/useRoomStore';

interface PreviewRoomProps {
  name: string;
}

const PreviewRoom: FC<PreviewRoomProps> = ({ name }) => {
  const { setActiveRoom } = useRoomStore();

  const showDiscussion = () => {
    setActiveRoom({ activeRoomName: name });
  };

  return (
    <div
      onClick={showDiscussion}
      className="p-2 my-1 border border-gray-400 rounded-lg cursor-pointer"
    >
      <h1 className="text-center">{name}</h1>
    </div>
  );
};

export default PreviewRoom;
