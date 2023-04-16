import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getAuthStatus } from 'redux/auth/selectorsAuth';
import { HeaderStyled } from './AppBar.styled';

import { Navigate } from 'components/Navigate/Navigate';

export const AppBar = () => {
  const isAuth = useSelector(getAuthStatus);

  return (
    <HeaderStyled>
      <Navigate />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};
