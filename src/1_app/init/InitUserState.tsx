import { FC, PropsWithChildren, useEffect } from 'react';
import userApi from '../../6_shared/api/user/userApi';
import useUserStore from '../../6_shared/hooks/store/useUserStore';

const InitUserState: FC<PropsWithChildren> = ({ children }) => {
  const { setUserToState } = useUserStore();
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await userApi.getCurrentUserData();
      if (user) {
        setUserToState(user);
      }
    };
    fetchCurrentUser();
  }, []);
  return <>{children}</>;
};

export default InitUserState;
