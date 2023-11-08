import { logoutUserFetch } from '../../6_shared/api/auth/auth';

const Logout = () => {
  const logoutHandler = async () => {
    await logoutUserFetch();
  };

  return (
    <div onClick={logoutHandler}>
      <span className="inline-flex w-[52px] h-[52px] bg-logout bg-no-repeat bg-center rounded-full cursor-pointer hover:bg-grayish hover:shadow-lg"></span>
    </div>
  );
};

export default Logout;
