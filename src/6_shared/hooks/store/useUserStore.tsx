import { useAppDispatch, useAppSelector } from '../../../1_app/store/store';
import { UserState, removeUser, setUser } from '../../store/user/slice';

const useUserStore = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return {
    user,
    setUserToState: (user: UserState) => dispatch(setUser(user)),
    clearUserState: () => dispatch(removeUser()),
  };
};

export default useUserStore;
