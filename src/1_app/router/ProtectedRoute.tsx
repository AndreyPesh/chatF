import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import useAuth from '../../6_shared/hooks/useAuth';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  let { isAuth } = useAuth();
  return isAuth ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
