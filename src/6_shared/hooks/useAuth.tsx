import { useCookies } from 'react-cookie';

const useAuth = () => {
  const [cookie] = useCookies(['is_auth']);

  return { isAuth: cookie.is_auth };
};

export default useAuth;
