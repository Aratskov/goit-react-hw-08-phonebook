import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthStatus } from 'redux/auth/selectorsAuth';

export const PublicRoute = ({ component, redirectTo = '/contacts' }) => {
  const isAuth = useSelector(getAuthStatus);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};
