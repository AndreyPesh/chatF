import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  let auth = { token: true };
  return auth.token ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
