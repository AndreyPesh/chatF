import InterlocutorInfo from '../../4_features/interlocutor/InterlocutorInfo';
import ImageList from '../../4_features/interlocutor/ImageList';
import ListRecentFiles from '../../4_features/interlocutor/ListRecentFiles';
import Notifications from '../../4_features/interlocutor/Notifications';
import useInterlocutorDescriptionState from '../../6_shared/hooks/store/useInterlocutorDescriptionState';
import classNames from 'classnames';
import Button from '../../6_shared/ui/buttons/Button';
import { TYPE_BUTTON } from '../../6_shared/enums/buttons';
import Cross from '../../6_shared/ui/cross/Cross';

const InterlocutorDescription = () => {
  const { isShow, closeInterlocutorDescription } =
    useInterlocutorDescriptionState();
  return (
    <div
      className={classNames(
        'absolute p-8 pt-10 w-[382px] h-[100vh] bg-white border-l-2 border-l-light transition-all overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light z-20',
        { 'right-0': isShow },
        { 'right-[-200%]': !isShow }
      )}
    >
      <div className="w-full flex justify-end">
        <Cross
          handler={() => closeInterlocutorDescription()}
          size={{ width: '52px', height: '52px' }}
        />
      </div>
      <InterlocutorInfo />
      <Notifications />
      <ListRecentFiles />
      <ImageList />
      <Button type={TYPE_BUTTON.DANGER} sign="Block Robert" />
    </div>
  );
};

export default InterlocutorDescription;
