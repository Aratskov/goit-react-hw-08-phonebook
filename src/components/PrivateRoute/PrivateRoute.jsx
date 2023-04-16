import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthStatus } from 'redux/auth/selectorsAuth';

export const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isAuth = useSelector(getAuthStatus);

  return isAuth ? component : <Navigate to={redirectTo} />;
};
