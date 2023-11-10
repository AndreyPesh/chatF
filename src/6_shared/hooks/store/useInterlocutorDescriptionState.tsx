import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import {
  closeInterlocutorDescription,
  showInterlocutorDescription,
} from '../../../3_widgets/interlocutor/state/slice';

const useInterlocutorDescriptionState = () => {
  const isShow = useAppSelector(
    (state) => state.interlocutorDescription.isShow
  );
  const dispatch = useAppDispatch();
  return {
    isShow,
    showInterlocutorDescription: () => dispatch(showInterlocutorDescription()),
    closeInterlocutorDescription: () =>
      dispatch(closeInterlocutorDescription()),
  };
};

export default useInterlocutorDescriptionState;
