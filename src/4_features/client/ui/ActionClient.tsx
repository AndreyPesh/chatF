import useActiveRoomStore from '../../../6_shared/hooks/store/useActiveRoomStore';
import Cross from '../../../6_shared/ui/cross/Cross';
import CallAction from './CallAction';
import OptionClient from './OptionClient';
import VideoAction from './VideoAction';

const ActionClient = () => {
  const { resetRoom } = useActiveRoomStore();
  return (
    <div className="flex w-[120px] md:w-[180px] justify-between">
      <CallAction />
      <VideoAction />
      <OptionClient />
      <div className='md:hidden'>
        <Cross
          handler={() => resetRoom()}
          size={{ width: '52px', height: '52px' }}
        />
      </div>
    </div>
  );
};

export default ActionClient;
