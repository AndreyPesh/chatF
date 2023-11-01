import InterlocutorInfo from '../../4_features/interlocutor/InterlocutorInfo';
import ImageList from '../../4_features/interlocutor/ImageList';
import ListRecentFiles from '../../4_features/interlocutor/ListRecentFiles';
import Notifications from '../../4_features/interlocutor/Notifications';
import useInterlocutorDescriptionState from '../../6_shared/hooks/useInterlocutorDescriptionState';
import classNames from 'classnames';

const InterlocutorDescription = () => {
  const { isShow, closeInterlocutorDescription } =
    useInterlocutorDescriptionState();
  return (
    <div
      className={classNames(
        'absolute top-[-20px] p-8 pt-10 w-[382px] bg-white border-l-2 border-l-light transition-all z-20',
        {'right-0': isShow},
        {'right-[-200%]': !isShow},
      )}
    >
      <div className="w-full flex justify-end">
        <span
          onClick={() => closeInterlocutorDescription()}
          className="right-8 top-8 inline-flex w-14 h-14 rounded-full bg-cross bg-no-repeat bg-center border-2 border-light transition-all cursor-pointer active:scale-90"
        ></span>
      </div>
      <InterlocutorInfo />
      <Notifications />
      <ListRecentFiles />
      <ImageList />
    </div>
  );
};

export default InterlocutorDescription;
