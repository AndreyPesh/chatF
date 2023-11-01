import InterlocutorInfo from '../../4_features/interlocutor/InterlocutorInfo';
import ImageList from '../../4_features/interlocutor/ImageList';
import ListRecentFiles from '../../4_features/interlocutor/ListRecentFiles';
import Notifications from '../../4_features/interlocutor/Notifications';
import useInterlocutorDescriptionState from '../../6_shared/hooks/useInterlocutorDescriptionState';

const InterlocutorDescription = () => {
  const { closeInterlocutorDescription } = useInterlocutorDescriptionState();
  return (
    <div className="relative p-8 pt-20 w-[372px] border-l-2 border-l-light">
      <span
        onClick={() => closeInterlocutorDescription()}
        className="absolute right-8 top-8 inline-flex w-14 h-14 rounded-full bg-cross bg-no-repeat bg-center border-2 border-light transition-all cursor-pointer active:scale-90"
      ></span>
      <InterlocutorInfo />
      <Notifications />
      <ListRecentFiles />
      <ImageList />
    </div>
  );
};

export default InterlocutorDescription;
