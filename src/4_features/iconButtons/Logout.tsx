import { logoutUserFetch } from '../../6_shared/api/auth/auth';
import useUserStore from '../../6_shared/hooks/store/useUserStore';

const Logout = () => {
  const { clearUserState } = useUserStore();
  const logoutHandler = async () => {
    await logoutUserFetch();
    clearUserState();
  };

  return (
    <div onClick={logoutHandler}>
      <span className="inline-flex w-[52px] h-[52px] bg-logout bg-no-repeat bg-center rounded-full cursor-pointer hover:bg-grayish hover:shadow-lg"></span>
    </div>
  );
};

export default Logout;
